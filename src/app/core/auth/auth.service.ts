import { inject, Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { HttpService } from '../http/http.service';
import { AUTH_API } from './auth.constants';
import { AuthResponse, SignInRequest, SignUpRequest } from './interface';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { PrivateRoutes } from '../../private-layout/private-layout-routes.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  protected readonly httpService = inject(HttpService);
  protected readonly tokenService = inject(TokenService);
  protected readonly router = inject(Router);
  private readonly destroy$ = new Subject<void>();

  register(userData: SignUpRequest): Subscription {
    return this.httpService
      .post<SignUpRequest, AuthResponse>(AUTH_API.register, userData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          const token = response.body?.token;
          if (token) {
            this.tokenService.setToken(token);
            this.router.navigate([PrivateRoutes.Portfolio]).then();
          }
        },
      });
  }

  login(data: SignInRequest): Subscription {
    return this.httpService
      .post<SignInRequest, AuthResponse>(AUTH_API.login, data)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
