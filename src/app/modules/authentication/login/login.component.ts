import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { AuthService } from '../../../_core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: {};

  constructor(
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.login = {
      inputs: {
        email: {
          type: "email",
          placeholder: "Enter your email",
          name: "email"
        },
        password: {
          type: "password",
          placeholder: "Enter your password",
          name: "password"
        }
      },
      buttons: {
        signup: {
          type: "submit",
          label: "Signin",
          color: "primary"
        }
      },
      functions: {
        submit: () => this.onSubmit()
      }
    }
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.authService.login({ email, password });
  }
}
