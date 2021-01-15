import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosCadastrarComponent } from './produtos-cadastrar.component';

const routes: Routes = [{
  path: '', component: ProdutosCadastrarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosCadastrarRoutingModule { }
