import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcasListarComponent } from './marcas-listar.component';

const routes: Routes = [{
  path: '', component: MarcasListarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcasListarRoutingModule { }
