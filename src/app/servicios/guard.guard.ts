import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate { 
    constructor(private autenticacionServicio:AuthService, private rutas:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let  currentUser=this.autenticacionServicio.UsuarioAutenticado;
    console.log('accees token: ', currentUser.accessToken);
    if(currentUser && currentUser.accessToken)
    {
      return true;
    }
    else
    {
      this.rutas.navigate(['/']);
      return false;
    }

  }
      
    /* 
    realRol: string;
  
    constructor( private tokenService: TokenService, private router: Router) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const expectedRol = route.data.expectedRol;
      const roles = this.tokenService.getAuthorities();
      this.realRol = 'user';
      roles.forEach(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.realRol = 'admin';
        }
      });
      if (!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    */
  }
  

