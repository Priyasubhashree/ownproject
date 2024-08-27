import { Component, HostListener, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isMobile: boolean = false;
  toastMessage: string | null = null;

  @ViewChild('createAccountButton') createAccountButton!: ElementRef;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ],
      gender: ['', Validators.required],
      dob: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.checkScreenSize();

    // Listen to form changes
    this.signupForm.valueChanges.subscribe(() => {
      if (this.signupForm.valid) {
        this.focusOnCreateAccountButton();
      }
    });
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

  private passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      return null;
    }
  }

  private focusOnCreateAccountButton() {
    this.createAccountButton.nativeElement.focus();
  }

  // Method to convert email to lowercase
  convertToLowercase() {
    const emailControl = this.signupForm.get('email');
    if (emailControl) {
      emailControl.setValue(emailControl.value.toLowerCase(), { emitEvent: false });
    }
  }
}
