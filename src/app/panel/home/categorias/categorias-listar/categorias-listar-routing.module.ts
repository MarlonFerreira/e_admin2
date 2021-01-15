import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasListarComponent } from './categorias-listar.component';
import { CategoriasListarModule } from './categorias-listar.module';
import { CategoriasModalExcluirComponent } from './categorias-modal-excluir/categorias-modal-excluir.component';

const routes: Routes = [{
  path: '', component: CategoriasListarComponent,
  children: [
    // { path: '', component: CategoriasModalExcluirComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasListarRoutingModule { }
