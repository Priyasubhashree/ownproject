import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
showCustomerForm() {
throw new Error('Method not implemented.');
}
  accountForm!: FormGroup;
  isSidebarHidden: boolean = false;
  isVerified: boolean = false;
  toastMessage: string | null = null;

  showPassword = false;
  showRePassword = false;
  currentForm: string = 'account';
  showingAccountForm = true; // Make sure the account form is visible initially

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group(
      {
        accountId: ['', Validators.required],
        name: ['', [Validators.required, Validators.minLength(2)]],
        phone: [
          '',
          [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: this.mustMatch('password', 'rePassword'),
      }
    );

    this.accountForm.get('email')?.statusChanges.subscribe(() => {
      this.checkIfVerified(
        this.accountForm.get('email')?.value,
        this.accountForm.get('password')?.value
      );
    });

    this.accountForm.get('password')?.valueChanges.subscribe((password) => {
      this.checkIfVerified(this.accountForm.get('email')?.value, password);
    });
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  showAccountForm() {
    this.showingAccountForm = true;
    // Other forms can be hidden here
  }

  showCusForm() {
    this.showingAccountForm = false;
    // Other forms can be shown here if needed
  }

  showMeterForm() {
    this.showingAccountForm = false;
    // Other forms can be shown here if needed
  }

  showMapForm() {
    this.showingAccountForm = false;
    // Other forms can be shown here if needed
  }

  onSaveAccount() {
    if (this.accountForm.valid) {
      console.log('Account Form Data:', this.accountForm.value);
      this.handleAccount(); // Save and handle account logic
    }
  }

  handleAccount(): void {
    if (this.accountForm.valid && this.isVerified) {
      console.log('Form Submitted', this.accountForm.value);
      this.showToast('Account details saved successfully.');

      setTimeout(() => {
        this.router.navigate(['/customer']);
      }, 3000); // Navigate to the customer component after 3 seconds
    } else {
      console.log('Form is invalid or credentials are incorrect');
      this.showToast('Invalid');
    }
  }

  showToast(message: string) {
    this.toastMessage = message;

    setTimeout(() => {
      this.toastMessage = null;
    }, 3000); // Toast message will disappear after 3 seconds
  }

  convertToLowercase() {
    const emailControl = this.accountForm.get('email');
    if (emailControl) {
      emailControl.setValue(emailControl.value.toLowerCase(), {
        emitEvent: false,
      });
    }
  }

  checkIfVerified(email: string, password: string): void {
    this.isVerified =
      email === 'stuartlittle@gmail.com' && password === 's@123456';
  }

  switchForm(formName: string): void {
    this.currentForm = formName;
  }

  saveForm(nextForm: string): void {
    // Perform save logic here
    this.currentForm = nextForm;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleRePasswordVisibility() {
    this.showRePassword = !this.showRePassword;
  }
}
