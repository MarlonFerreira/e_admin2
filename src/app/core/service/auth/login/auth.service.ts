import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ResponseLoginModel } from './response-login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = `${environment.API}/loginusuario`;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLogin(dados): Observable<ResponseLoginModel>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
      .append('login', dados.value.login)
      .append('senha', dados.value.senha)
    };

    return this.httpClient.get<ResponseLoginModel>(this.apiUrl, httpOptions ).pipe(take(1))
  }
}
