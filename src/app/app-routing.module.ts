import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustComponent } from './cust/cust.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: "/users", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cust', component: CustComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
