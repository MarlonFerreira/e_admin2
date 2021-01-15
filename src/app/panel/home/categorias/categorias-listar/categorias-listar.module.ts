import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasListarRoutingModule } from './categorias-listar-routing.module';
import { CategoriasModalExcluirComponent } from './categorias-modal-excluir/categorias-modal-excluir.component';
import { CategoriasModalEditarComponent } from './categorias-modal-editar/categorias-modal-editar.component';
import { CategoriasModalFiltrarComponent } from './categorias-modal-filtrar/categorias-modal-filtrar.component';
import { CategoriasListarComponent } from './categorias-listar.component';
import { FormsModule } from '@angular/forms';
import { SortByPipe } from 'src/app/core/pipe/sortByPipe.pipe';


@NgModule({
  declarations: [
    CategoriasListarComponent,
    CategoriasModalFiltrarComponent,
    CategoriasModalEditarComponent,
    CategoriasModalExcluirComponent,
    SortByPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriasListarRoutingModule
  ],
  exports: [
    CategoriasListarComponent
  ]
})
export class CategoriasListarModule { }
