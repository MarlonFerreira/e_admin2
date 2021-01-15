import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasListarRoutingModule } from './marcas-listar-routing.module';
import { MarcasListarComponent } from './marcas-listar.component';


@NgModule({
  declarations: [
    MarcasListarComponent
  ],
  imports: [
    CommonModule,
    MarcasListarRoutingModule
  ]
})
export class MarcasListarModule { }
