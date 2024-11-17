import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';
import { PublicRoutes } from '../../../public-layout/public-layout-routes.enum';
import { AUTH_API } from '../auth.constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly AUTH_HEADER = 'Authorization';
  private readonly TOKEN_TYPE = 'Bearer';

  constructor(private readonly tokenService: TokenService, private readonly router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.isPublicRequest(request.url)) {
      return next.handle(request);
    }

    const authenticatedRequest = this.addAuthToken(request);

    return next.handle(authenticatedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          this.handleUnauthorized();
        }
        return throwError(() => error);
      })
    );
  }

  private isPublicRequest(url: string): boolean {
    const publicEndpoints = [AUTH_API.login, AUTH_API.register];
    return publicEndpoints.some(endpoint => url.includes(endpoint));
  }

  private addAuthToken(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const token = this.tokenService.getToken();

    if (!token) {
      return request;
    }

    return request.clone({
      setHeaders: {
        [this.AUTH_HEADER]: `${this.TOKEN_TYPE} ${token}`,
      },
    });
  }

  private handleUnauthorized(): void {
    this.tokenService.removeToken();
    this.router.navigate([PublicRoutes.SignIn]).then();
  }
}
