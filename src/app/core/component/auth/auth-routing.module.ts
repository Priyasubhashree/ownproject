import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CustomerComponent } from './customer/customer.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { MeterComponent } from './meter/meter.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LastpageComponent } from './lastpage/lastpage.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },

  { path: 'user-details', component: UserDetailsComponent },

  { path: '', component: AccountComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'meter', component: MeterComponent },
  { path: 'map', component: MapComponent },
  { path: 'lastpage', component: LastpageComponent },

  // { path: '', component: AccountComponent, data: { formType: 'account' } },
  // { path: 'customer', component: , data: { formType: 'customer' } },
  // { path: 'meter', component: FormComponent, data: { formType: 'meter' } },
  // { path: 'map', component: FormComponent, data: { formType: 'map' } },
  // { path: '', redirectTo: '/account', pathMatch: 'full' },
  // { path: '**', redirectTo: '/account' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
