import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css'],
})
export class MeterComponent implements OnInit {

  meterForm!: FormGroup;
  toastMessage: string | null = null;
  isVerified: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.meterForm = this.fb.group({
      meterId: ['', Validators.required],
      location: ['', Validators.required],
      status: ['', Validators.required],
      installationDate: ['', Validators.required],
    });
  }

  onSaveMeter(): void {
    if (this.meterForm.valid && this.isVerified) {
      console.log('Form Submitted', this.meterForm.value);
      this.showToast('Meter details saved successfully.');

      // Redirect to the map page after saving
      setTimeout(() => {
        this.router.navigate(['/map']); // Navigates to the '/map' route after 3 seconds
      }, 3000);
    } else {
      console.log('Form is invalid or not verified');
      this.showToast('Please ensure all fields are filled out correctly and verified.');
    }
  }

  showToast(message: string) {
    this.toastMessage = message;

    // Hide the toast message after 3 seconds
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }

  closeToast() {
    this.toastMessage = null;
  }

  checkIfVerified(meterId: string | null): void {
    if (meterId) {
      // Verification logic, replace with actual logic as needed
      this.isVerified = meterId === 'GS3'; // Example verification
    }
  }
}
