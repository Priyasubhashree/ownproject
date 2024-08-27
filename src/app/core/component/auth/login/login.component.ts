import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  toastMessage: string | null = null;
  isVerified: boolean = false;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remember: [false],
    });
  }

  ngOnInit(): void {
    // Enable login button based on email and password validation
    this.loginForm.get('email')?.statusChanges.subscribe((status) => {
      this.checkIfVerified(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value);
    });

    this.loginForm.get('password')?.valueChanges.subscribe((password) => {
      this.checkIfVerified(this.loginForm.get('email')?.value, password);
    });
  }

  checkIfVerified(email: string, password: string): void {
    // Verify email and password
    this.isVerified = email === 'stuartlittle@gmail.com' && password === 'subhashree@123';
  }

  handleLogin(): void {
    if (this.loginForm.valid && this.isVerified) {
      console.log('Form Submitted', this.loginForm.value);
      this.showToast('Logged in successfully.');

      // Redirect to user-details component after successful login
      setTimeout(() => {
        this.router.navigate(['/user-details']);
      }, 3000); // Delay for 3 seconds to show the toast message
    } else {
      console.log('Form is invalid or credentials are incorrect');
      this.showToast('Invalid Password or Email.');
    }
  }

  showToast(message: string) {
    this.toastMessage = message;

    // Hide the toast message after 3 seconds
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }
}
