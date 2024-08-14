import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ToastComponent } from './toast/toast.component';

const routes: Routes = [{ path: 'signup', component: SignupComponent },
  { path: '', component: LoginComponent },
  { path: 'toast', component: ToastComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
