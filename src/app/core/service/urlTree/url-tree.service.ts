import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlTreeService {

  constructor(
    private router: Router,
  ) { }

  urlTree(...dados) {

    for (var key in dados) {
      if (dados[key] === '')
      dados[key] = null
    }
    const tree = this.router.createUrlTree([], {
      queryParams: {
        dados
      }
    })
    return tree
  }
}
