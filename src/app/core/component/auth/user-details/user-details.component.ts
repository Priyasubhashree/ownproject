import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetailsForm!: FormGroup; // Definite assignment assertion
  toastMessage: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userDetailsForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [{ value: 'stuartlittle@gmail.com', disabled: true }, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      reEnterPassword: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  onSubmit(): void {
    if (this.userDetailsForm.valid) {
      // Handle form submission
      this.toastMessage = 'Details updated successfully!';
    } else {
      this.toastMessage = 'Please correct the errors in the form.';
    }
  }

  passwordMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    const password = formGroup.get('password')?.value;
    const reEnterPassword = formGroup.get('reEnterPassword')?.value;
    return password === reEnterPassword ? null : { notMatch: true };
  }
}
