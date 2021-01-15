import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LowerCaseService {

  constructor() { }

  lowerCase(dados) {
    console.log(dados)
    for (var key in dados) {
      if (dados[key] !== null && dados[key] !== '')
        dados[key] = dados[key].toString().toLowerCase()
    }
    return dados
  }
}
