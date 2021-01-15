import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { LocalStorageService } from 'src/app/core/service/localStorage/local-storage.service';
import { AuthCheckLocalService } from 'src/app/core/service/auth/authCheck/local/auth-check-local.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardLocalService implements CanActivate{

  constructor(
    private authCheckLocalService: AuthCheckLocalService,
    private localStorage: LocalStorageService,
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
     ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      let dados = {
        token: this.localStorage.get('token'),
        nome: this.localStorage.get('nome'),
        auth: this.localStorage.get('auth')
      }
  
      if(this.authCheckLocalService.usuarioAutenticadoLocal(dados)){
        return true;
      }
  
      return false
  }
}
