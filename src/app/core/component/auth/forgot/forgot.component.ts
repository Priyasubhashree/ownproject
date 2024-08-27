import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  forgotForm: FormGroup;
  toastMessage: string | null = null;
  showPassword = false;
  isVerified = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  handleForgotPassword() {
    if (this.forgotForm.valid) {
      // Handle forgot password logic
      this.showToast('Reset link sent');
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  showToast(message: string) {
    this.toastMessage = message;
    // Hide the toast message after 3 seconds and then redirect to login page
    setTimeout(() => {
      this.toastMessage = null;
      this.router.navigate(['/login']);
    }, 3000);
  }

  toggleForm() {
    this.isVerified = !this.isVerified;
  }
}
