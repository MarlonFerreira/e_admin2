import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { HeadersService } from '../headers/headers.service';
import { LowerCaseService } from '../lowerCase/lower-case.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(
    private http: HttpClient,
    private headersService: HeadersService,
    private lowerCaseService: LowerCaseService,

  ) { }

  getDados(URL: string): Observable<any> {
    const headers = this.headersService.createHeaders()

    return this.http.get<any>(URL, { headers })
  }


  postDados(URL, dados) {

    const headers = this.headersService.createHeaders()
    const body = this.lowerCaseService.lowerCase(dados)
    return this.http.post(URL, body, { headers }).pipe(take(1))
  }

  deleteDados(URL){
    const headers = this.headersService.createHeaders()
    // const body = this.lowerCaseService.lowerCase(dados)
    return this.http.delete(URL, { headers }).pipe(take(1))
  }

  patchDados(URL, dados){
    console.log(URL)
    const headers = this.headersService.createHeaders()
    return this.http.patch(URL, dados, { headers }).pipe(take(1))
  }


}
