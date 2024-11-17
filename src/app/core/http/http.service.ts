import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get<T>(route: string, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(this.createUrl(route), { params });
  }

  post<TReq, TRes>(route: string, body: TReq): Observable<HttpResponse<TRes>> {
    return this.httpClient.post<HttpResponse<TRes>>(this.createUrl(route), body);
  }

  private createUrl(route: string): string {
    return `${environment.apiUrl}${route}`;
  }
}
