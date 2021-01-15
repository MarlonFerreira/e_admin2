import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasCadastrarComponent } from './categorias-cadastrar.component';
import { CategoriasCadastrarModule } from './categorias-cadastrar.module';

const routes: Routes = [{
  path: '', component: CategoriasCadastrarComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasCadastrarRoutingModule { }
