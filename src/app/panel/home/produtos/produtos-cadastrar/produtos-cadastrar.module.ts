import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosCadastrarRoutingModule } from './produtos-cadastrar-routing.module';
import { ProdutosCadastrarComponent } from './produtos-cadastrar.component';


@NgModule({
  declarations: [
    ProdutosCadastrarComponent
  ],
  imports: [
    CommonModule,
    ProdutosCadastrarRoutingModule
  ]
})
export class ProdutosCadastrarModule { }
