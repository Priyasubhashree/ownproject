import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  
  mapForm!: FormGroup;
  toastMessage: string | null = null;
  accountIds = [
    'HIGHRISE FORT',
    'Zenith Towers',
    'Prestige Park Grove',
    'Mahindra Eden',
  ];
  customerIds = [
    'Willow',
    'Audrey',
    'Autumn',
    'Tatum',
    'Lyla',
    'Piper',
    'Ember',
  ];
  locationIds = [
    'Sir M Vishveshwaraya Road, lake, near Horamavu, Horamavu, Bengaluru, Karnataka 560043',
    'R. Condomínio Comercial Conchas, Luanda, Angola',
    'Chikka Banahalli Rd, Whitefield, Sai Gardens, Kadugodi, Bengaluru, Karnataka 560067',
    'Sy. No. 49 & 50/2, Holiday Village Road, Bengaluru:, Kanakapura Rd, Vajarahalli, 560062',
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.mapForm = this.fb.group({
      accountid: ['', Validators.required],
      cusid: ['', Validators.required],
      location: ['', Validators.required],
      status: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }
  
  onSaveMap(): void {
    if (this.mapForm.valid) {
      console.log('Form Submitted', this.mapForm.value);
      this.showToast('Map details saved successfully.');

      // Redirect to the map page after saving
      setTimeout(() => {
        this.router.navigate(['lastpage']); // Navigates to the '/map' route after 3 seconds
      }, 3000);
    } else {
      console.log('Form is invalid');
      this.showToast('Please ensure all fields are filled out correctly.');
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
}
