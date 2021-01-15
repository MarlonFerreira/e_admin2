import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosListarComponent } from './produtos-listar.component';

const routes: Routes = [{
  path: '', component: ProdutosListarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosListarRoutingModule { }
