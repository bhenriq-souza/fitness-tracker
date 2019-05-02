import { Subject } from 'rxjs/Subject';

import { IUser, IAuth } from '../_models';

export class AuthService {
    public authChange: Subject<boolean> = new Subject<boolean>();
    private user: IUser;

    registerUser(authData: IAuth): void {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };

        this.authChange.next(true);
    }

    login(authData: IAuth) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };

        this.authChange.next(true);
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
    }

    getUser() {
        return { ...this.user };
    }

    isAuthenticated() {
        return this.user != null;
    }
}