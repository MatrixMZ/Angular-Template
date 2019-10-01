import { AuthSignInComponent } from './views/auth-sign-in/auth-sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'sign-in', component: AuthSignInComponent },
  { path: '**', redirectTo: 'auth/sign-in'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
