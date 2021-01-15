import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  constructor() { }

  private URL_GET

  setFiltro(URL_GET){
    this.URL_GET = URL_GET
  }

  getFiltro(){
    console.log(this.URL_GET)
    return this.URL_GET
  }
}
