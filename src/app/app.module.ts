import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule only once

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/component/auth/auth.module'; // Import AuthModule

@NgModule({
  declarations: [
    AppComponent,
    // You don't need to declare CustomerComponent here if it's declared in AuthModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule, // Import AuthModule here
    ReactiveFormsModule, // Add ReactiveFormsModule here
    // Other modules if necessary
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
