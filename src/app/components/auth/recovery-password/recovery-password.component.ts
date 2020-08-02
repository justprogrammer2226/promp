import { ValidationService } from '../../../core/services/validation.service';
import { AuthService } from '../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInModel } from '../../../core/models/auth/sign-in.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit {

  private returnUrl: string;
  public form: FormGroup;
  public sentEmail = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private validationService: ValidationService,
  ) { 
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  public ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public submit(): void {
    if (this.form.valid) {
      this.authService.sendRecoveryPasswordEmail(this.form.value.email).subscribe(_ => {
        this.sentEmail = true;
      });
    } else {
      this.validationService.validateAllFormFields(this.form);
    }
  }
}
