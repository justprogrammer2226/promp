import { ResetPasswordModel } from './../../../core/models/auth/reset-password.model';
import { ValidationService } from '../../../core/services/validation.service';
import { AuthService } from '../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInModel } from '../../../core/models/auth/sign-in.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch } from 'src/app/core/validators/must-match.validator';

@Component({
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  private returnUrl: string;
  private resetPassword: ResetPasswordModel = new ResetPasswordModel();
  public form: FormGroup;
  public wasReset = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private validationService: ValidationService,
  ) { 
    this.form = this.formBuilder.group({
      password: [null, [ Validators.required]],
      confirmPassword: [null, [ Validators.required]],
    }, {
      validators: mustMatch('password', 'confirmPassword')
    });
  }

  public ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.resetPassword.email = this.route.snapshot.queryParams['email'];
    this.resetPassword.token = this.route.snapshot.queryParams['token'];
    console.log(this.resetPassword)
  }

  public submit(): void {
    if (this.form.valid) {
      this.resetPassword.newPassword = this.form.value.password;
      this.authService.resetPassword(this.resetPassword).subscribe(_ => {
        this.wasReset = true;
      });
    } else {
      this.validationService.validateAllFormFields(this.form);
    }
  }
}
