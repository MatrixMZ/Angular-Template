import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './views/auth-login/auth-login.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AuthLoginComponent],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
