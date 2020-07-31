import { SharedModule } from './../../shared/shared.module';
import { NebularModule } from './../../nebular.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { authRoutes } from './auth.routing';
import { SignUpComponent } from './sign-up/sign-up.component';
  
@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
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
    SignInComponent,
  ],
})
export class AuthModule { }
