import { Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';

import { Categoria } from 'src/app/core/model/categoria.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private readonly apiURL = `${environment.API}`;
  private categoria: Categoria = new Categoria()

  constructor(
    private router: Router,
    private serializer: UrlSerializer
  ) { }


  createUrlGet(skip, limit) {
    const params = this.urltree(this.getFiltro(), skip, limit)
    const URL_GET = `${this.getApiUrl()}${this.serializer.serialize(params).toString()}`
    return URL_GET
  }

  setFiltro(categoria: Categoria) {
    this.categoria = categoria
  }

  getFiltro() {
    return this.categoria
  }

  resetFiltro() {
    for (var key in this.categoria) {
      this.categoria[key] = null
    }
  }

  getApiUrl() {
    return this.apiURL
  }

  urltree(dados: Categoria, skip = 0, limit = 11) {

    for (var key in dados) {
      if (dados[key] === '')
        dados[key] = null
    }
    const tree = this.router.createUrlTree(['categorias'], {
      queryParams: {
        grupo: dados.grupo,
        nome: dados.nome,
        skip: skip,
        limit: limit
      }
    })
    return tree
  }
}
