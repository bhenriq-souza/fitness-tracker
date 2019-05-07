import { Injectable } from "@angular/core";
import {    CanActivate, 
            ActivatedRouteSnapshot, 
            RouterStateSnapshot, 
            Router 
        } from "@angular/router";

import { AuthService } from '../../_services';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['auth/login']);
        }
    }
}