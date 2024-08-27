import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import this

import { AccountComponent } from './account/account.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { MeterComponent } from './meter/meter.component';
import { MapComponent } from './map/map.component';
import { LastpageComponent } from './lastpage/lastpage.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    UserDetailsComponent,
    AccountComponent,

    HomeComponent,
      CustomerComponent,
      MeterComponent,
      MapComponent,
      LastpageComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule, // Add this here
    FormsModule,
  ],
})
export class AuthModule {}
