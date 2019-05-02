import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

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
        this.onAuthChanged(true, '/training');
    }

    login(authData: IAuth) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.onAuthChanged(true, '/training');
    }

    logout() {
        this.user = null;
        this.onAuthChanged(false, '/auth/login');
    }

    getUser() {
        return { ...this.user };
    }

    isAuthenticated() {
        return this.user != null;
    }

    private onAuthChanged(isAuth: boolean, navigate: string = null): void {
        this.authChange.next(isAuth);
        if (navigate) this.router.navigate([navigate]);
    }
}