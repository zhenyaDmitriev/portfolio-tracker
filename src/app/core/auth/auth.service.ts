import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { IAuthRequest, IAuthResponse } from './interface';
import { AUTH_API } from './auth.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  protected readonly httpService = inject(HttpService);

  register(data: IAuthRequest): Observable<HttpResponse<IAuthResponse>> {
    return this.httpService.post<IAuthRequest, IAuthResponse>(AUTH_API.register, data);
  }
}
