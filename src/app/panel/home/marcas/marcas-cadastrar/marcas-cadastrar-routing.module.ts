import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcasCadastrarComponent } from './marcas-cadastrar.component';

const routes: Routes = [{
  path: '', component: MarcasCadastrarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcasCadastrarRoutingModule { }
