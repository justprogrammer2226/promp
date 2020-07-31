import { ValidationService } from './../../../core/services/validation.service';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignUpModel } from 'src/app/core/models/auth/sign-up.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch } from 'src/app/core/validators/must-match.validator';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private returnUrl: string;
  public form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private validationService: ValidationService,
  ) {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [ Validators.required]],
      confirmPassword: [null, [ Validators.required]],
    }, {
      validators: mustMatch('password', 'confirmPassword')
    });
  }

  public ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public submit(): void {
    if (this.form.valid) {
      const signUp = SignUpModel.adapt(this.form.value);
      this.authService.signUp(signUp).subscribe();
    } else {
      this.validationService.validateAllFormFields(this.form);
    }
  }
}
