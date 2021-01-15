import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasCadastrarRoutingModule } from './marcas-cadastrar-routing.module';
import { MarcasCadastrarComponent } from './marcas-cadastrar.component';


@NgModule({
  declarations: [
    MarcasCadastrarComponent
  ],
  imports: [
    CommonModule,
    MarcasCadastrarRoutingModule
  ]
})
export class MarcasCadastrarModule { }
