import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;
  isVerified: boolean = false;
  toastMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      customerName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });

    this.customerForm.get('phone')?.statusChanges.subscribe((status) => {
      this.checkIfVerified(this.customerForm.get('phone')?.value);
    });
  }

  // Handle Customer save
  handleCustomer(): void {
    if (this.customerForm.valid && this.isVerified) {
      console.log('Form Submitted', this.customerForm.value);
      this.showToast('Customer details saved successfully.');

      // Redirect to the next step after saving
      setTimeout(() => {
        this.router.navigate(['/meter']); // Change '/meter' to the actual path
      }, 3000); // Delay for 3 seconds to show the toast message
    } else {
      console.log('Form is invalid or phone number is incorrect');
      this.showToast('Invalid form data or unverified phone number.');
    }
  }

  // Show Toast message
  showToast(message: string) {
    this.toastMessage = message;

    // Hide the toast message after 3 seconds
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }

  checkIfVerified(phone: string): void {
    // Verify phone number
    this.isVerified = phone === '1234567890'; // Replace with actual verification logic
  }
}
