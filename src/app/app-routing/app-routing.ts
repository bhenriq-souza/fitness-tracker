import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        loadChildren: '../modules/home/home.module#HomeModule'
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
