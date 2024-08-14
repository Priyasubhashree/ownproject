import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import this

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ToastComponent } from './toast/toast.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule, // Add this here
    FormsModule
    
  ]
})
export class AuthModule { }
