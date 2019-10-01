import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthSignInComponent } from './views/auth-sign-in/auth-sign-in.component';

@NgModule({
  declarations: [
    AuthSignInComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
