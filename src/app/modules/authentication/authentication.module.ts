import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationRoutingModule } from './_routing/authentication.routing.module';
import { AppMaterialModule } from '../../app-material/app-material.module';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AppMaterialModule
  ]
})
export class AuthenticationModule { }
