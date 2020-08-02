import { SharedModule } from './../../shared/shared.module';
import { NebularModule } from './../../nebular.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { authRoutes } from './auth.routing';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
  
@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    RecoveryPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    NebularModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthModule { }
