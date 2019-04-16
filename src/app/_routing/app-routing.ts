import { Routes } from '@angular/router';

import { HomeComponent } from '../components';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'auth',
        loadChildren: '../modules/authentication/authentication.module#AuthenticationModule'
    },
    {
        path: 'training',
        loadChildren: '../modules/training/training.module#TrainingModule'
    }
];
