import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(chave, valor){
    window.localStorage[chave] = valor;
    return this;
  }

  get(chave, defaultValor=null){
    return window.localStorage[chave] || defaultValor;
  }

  setobject(chave, valor:Object){
    window.localStorage[chave] = JSON.stringify(valor);
    return this;
  }

  getObject(chave){
    return JSON.parse(window.localStorage.getItem(chave));
  }

  remove(chave){
    window.localStorage.removeItem(chave);
  }

  set setToken(valor){
    valor ? window.localStorage.set('token', valor):window.localStorage.remove('token');
  }

}
