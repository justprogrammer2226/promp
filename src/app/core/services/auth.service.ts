import { ResetPasswordModel } from './../models/auth/reset-password.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpModel } from 'src/app/core/models/auth/sign-up.model';
import { SignInModel } from './../models/auth/sign-in.model';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  public signIn(model: SignInModel): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/auth/sign-in', model);
  }

  public signUp(model: SignUpModel): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/auth/sign-up', model);
  }

  public sendRecoveryPasswordEmail(email: string): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/auth/recovery-password/' + email, null);
  }

  public resetPassword(model: ResetPasswordModel): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/auth/reset-password', model);
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public getUserId(): string {
    return jwt_decode(localStorage.getItem('token')).userId;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
}
