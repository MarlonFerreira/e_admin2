import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of } from 'rxjs';
import { groupBy, mergeMap, reduce } from 'rxjs/operators';

import { Categoria } from 'src/app/core/model/categoria.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorias-modal-filtrar',
  templateUrl: './categorias-modal-filtrar.component.html',
  styleUrls: ['./categorias-modal-filtrar.component.css'],
})
export class CategoriasModalFiltrarComponent implements OnInit {

  private readonly apiUrl = `${environment.API}categorias`

  @Output()
  eventEmitter = new EventEmitter();

  public categoriaFiltro: Categoria

  constructor(
  ) { }

  ngOnInit(): void {
    this.categoriaFiltro = new Categoria()
  }

  buscarCategoria() {
    this.eventEmitter.emit(this.categoriaFiltro)
  }
}