import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Categoria } from 'src/app/core/model/categoria.model';
import { RestService } from 'src/app/core/service/rest/rest.service';
import { UrlTreeService } from 'src/app/core/service/urlTree/url-tree.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorias-modal-editar',
  templateUrl: './categorias-modal-editar.component.html',
  styleUrls: ['./categorias-modal-editar.component.css']
})
export class CategoriasModalEditarComponent implements OnInit {

  private readonly apiURL = `${environment.API}categorias`;

  @Input() 
  categoria: Categoria

  @Output()
  atualizarLista$ = new EventEmitter()

  constructor(
    private restService: RestService,
    private router: Router,
    private urlTreeService: UrlTreeService
  ) { }

  ngOnInit(): void {
  }

  onConfirmUpdate(){

    this.restService.patchDados(this.apiURL, this.categoria)
    .subscribe(
      success => {
        this.atualizarLista$.emit()
      },
      error => {
        error => console.log('Erro ao atualizar')
      }
    )
  }

}
