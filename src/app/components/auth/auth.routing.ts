import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

export const authRoutes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'recovery-password',
    component: RecoveryPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
];
