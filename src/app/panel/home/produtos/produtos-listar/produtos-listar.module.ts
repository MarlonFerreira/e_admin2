import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosListarRoutingModule } from './produtos-listar-routing.module';
import { ProdutosListarComponent } from './produtos-listar.component';


@NgModule({
  declarations: [
    ProdutosListarComponent
  ],
  imports: [
    CommonModule,
    ProdutosListarRoutingModule
  ]
})
export class ProdutosListarModule { }
