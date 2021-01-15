import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
  children: [
    // { path: 'home', component: HomeComponent },
    { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule) },
    
    { path: 'categorias/cadastrar', loadChildren: () => import('./categorias/categorias-cadastrar/categorias-cadastrar.module').then(mod => mod.CategoriasCadastrarModule) },
    { path: 'categorias/listar', loadChildren: () => import('./categorias/categorias-listar/categorias-listar.module').then(mod => mod.CategoriasListarModule) },
    
    { path: 'marcas/cadastrar', loadChildren: () => import('./marcas/marcas-cadastrar/marcas-cadastrar.module').then(mod => mod.MarcasCadastrarModule) },
    { path: 'marcas/listar', loadChildren: () => import('./marcas/marcas-listar/marcas-listar.module').then(mod => mod.MarcasListarModule) },

    { path: 'produtos/cadastrar', loadChildren: () => import('./produtos/produtos-cadastrar/produtos-cadastrar.module').then(mod => mod.ProdutosCadastrarModule) },
    { path: 'produtos/listar', loadChildren: () => import('./produtos/produtos-listar/produtos-listar.module').then(mod => mod.ProdutosListarModule) },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
