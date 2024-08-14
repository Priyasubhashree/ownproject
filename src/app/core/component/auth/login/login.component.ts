import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  toastMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remember: [false]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  handleLogin() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      this.showToast('Logged in successfully.');
    } else {
      console.log('Form is invalid');
    }
  }

  showToast(message: string) {
    this.toastMessage = message;

    // Hide the toast message after 3 seconds
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }
  
}
