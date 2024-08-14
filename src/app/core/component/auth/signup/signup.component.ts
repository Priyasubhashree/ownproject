import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isMobile: boolean = false;
  toastMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 767;
  }

  get isFormValid() {
    return this.signupForm.valid;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted!', this.signupForm.value);
      this.showToast('Signed up successfully.');
    } else {
      console.log('Form is invalid');
    }
  }

  private showToast(message: string) {
    this.toastMessage = message;

    setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }
  
  // Removed the handleLogin method since it is not related to signup
}
