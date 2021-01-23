import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UrlSerializer } from '@angular/router';

import { Categoria } from 'src/app/core/model/categoria.model';
import { environment } from 'src/environments/environment';
import { CategoriasService } from '../../categorias.service';

@Component({
  selector: 'app-categorias-modal-filtrar',
  templateUrl: './categorias-modal-filtrar.component.html',
  styleUrls: ['./categorias-modal-filtrar.component.css'],
})
export class CategoriasModalFiltrarComponent implements OnInit {

  private readonly apiUrl = `${environment.API}/categorias`

  @Output()
  eventEmitter = new EventEmitter();

  public categoriaFiltro: Categoria

  constructor(
    private categoriasService: CategoriasService,
    private serializer: UrlSerializer
  ) { }

  ngOnInit(): void {
    this.categoriaFiltro = new Categoria()
  }

  buscarCategoria() {
    // const tree = this.categoriasService.urltree(this.categoriaFiltro)
    // const URL_GET = `${this.apiUrl}${this.serializer.serialize(tree).toString().toLowerCase()}`

    this.categoriasService.setFiltro(this.categoriaFiltro)
    this.eventEmitter.emit()

    // for (var key in this.categoriaFiltro) {
    //   this.categoriaFiltro[key] = null
    // }
  }
}