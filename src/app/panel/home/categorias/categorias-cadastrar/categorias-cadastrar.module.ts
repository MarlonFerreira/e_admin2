import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasCadastrarRoutingModule } from './categorias-cadastrar-routing.module';
import { CategoriasCadastrarComponent } from './categorias-cadastrar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriasCadastrarComponent
  ],
  imports: [
    CommonModule,
    CategoriasCadastrarRoutingModule,
    FormsModule  
  ]
})
export class CategoriasCadastrarModule { }
