import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  constructor(
    private LocalStorageService: LocalStorageService,

  ) { }

  createHeaders() {
    const auth = this.LocalStorageService.get('auth')
    const token = this.LocalStorageService.get('token')

    const headers = new HttpHeaders()
      // .append('Content-Type', 'application/x-www-form-urlencoded')
      // .append('Accept', 'application/json')
      .append('auth', auth)
      .append('token', token);

    return headers
  }
}
