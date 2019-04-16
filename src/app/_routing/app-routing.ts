import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: 'auth',
        loadChildren: '../modules/authentication/authentication.module#AuthenticationModule'
    },
    {
        path: 'training',
        loadChildren: '../modules/training/training.module#TrainingModule'
    }
];
