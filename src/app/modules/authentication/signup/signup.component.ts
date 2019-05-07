import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../../_core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: {};
  passwordMinLength: number = 6;
  maxYear: number = 18;
  minDate: Date ;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
    this.setMinage(this.maxYear);
  }

  minLengthVerification(inputLength: number): string {
    return `${inputLength} / ${this.passwordMinLength}`;
  }

  buildForm(): void {
    this.signupForm = {
      inputs: {
        email: {
          type: "email",
          placeholder: "Enter your email",
          name: "email",
          validation: {
            required: true
          },
          errors: {
            emailNotValid: "Email is not valid"
          }
        },
        password: {
          type: "password",
          placeholder: "Enter your password",
          name: "password",
          validation: {
            required: true,
            minLength: this.passwordMinLength,
          },
          errors: {
            passwordNotValid: "Password is not valid",
            minLengthMsg: "Password should be at least 6 characters long"
          },
          hints: {
            minLength: "Should be at least 6 characters long",
            minLengthVerification: (inputLength) => this.minLengthVerification(inputLength)
          }
        },
        birthdate: {
          name: "birthdate",
          label: "Enter your birthdate",
          validation: {
            required: true,
          },
          errors: {
            birthdateNotValid: "Birthdate is not valid"
          }
        },
        agree: {
          name: "agree",
          label: "Agree with Term and Conditions",
          color: "primary",
          validation: {
            required: true
          },
          errors: {
            agreeNotValid: "You must agree with the Terms and Conditions"
          }
        }

      },
      buttons: {
        signup: {
          type: "submit",
          label: "Signup",
          color: "primary"
        }
      },
      functions: {
        submit: (form) => this.onSubmit(form)
      }
    }
  }

  setMinage(amount: number) {
    const actualDate = new Date();
    this.minDate = new Date();
    this.minDate.setFullYear(actualDate.getFullYear() - amount);
  }

  onSubmit(form: NgForm) {
    const { email, password } = form.value;
    this.authService.registerUser({ email, password });
  }
}
