import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { TokenService } from '../token.service';
import { Observable } from 'rxjs';
import { PublicRoutes } from '../../../public-layout/public-layout-routes.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenService.isTokenPresent()) {
      return true;
    }

    return this.router.createUrlTree([PublicRoutes.SignIn]);
  }
}
