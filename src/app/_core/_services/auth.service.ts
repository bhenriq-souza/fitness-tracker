import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { IUser, IAuth } from '../_models';

@Injectable()
export class AuthService {
    private user: IUser;
    authChange = new Subject<boolean>();

    constructor(private router: Router) { }

    registerUser(authData: IAuth): void {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.onAuthSuccessfully();
    }

    login(authData: IAuth) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.onAuthSuccessfully();
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/auth/login']);
    }

    getUser() {
        return { ...this.user };
    }

    isAuthenticated() {
        return this.user != null;
    }

    private onAuthSuccessfully() {
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}