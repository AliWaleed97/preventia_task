import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(body) {
    return this.http.post(`/api/account/register`, body).toPromise();
  }
  public login(body) {
    return this.http.post(`/api/account/login`, body).toPromise();
  }
}
