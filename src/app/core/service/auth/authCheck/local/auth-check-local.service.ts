import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthCheckLocalService {

  autenticado = new EventEmitter<boolean>();
  private usuarioAuth: boolean = false;

  
  constructor(
    private router: Router
  ) { }

  usuarioAutenticadoLocal(dados){
    if(dados.auth !== 'true'){
      this.autenticado.emit(false);
      this.usuarioAuth = false;
      this.router.navigate(['/login']);
    }
    else{
      this.autenticado.emit(true);
      this.usuarioAuth = true;

    }
    return this.usuarioAuth
  }
}
