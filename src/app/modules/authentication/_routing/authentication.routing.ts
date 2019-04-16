import { Routes } from '@angular/router';

import { SignupComponent, LoginComponent } from '../';

export const AUTHENTICATION_ROUTING: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];
