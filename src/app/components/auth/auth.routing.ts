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
];
