import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignUpModel } from 'src/app/core/models/auth/sign-up.model';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signUp = new SignUpModel();
  public returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public submit(): void {
    console.log(this.signUp);
    this.authService.signUp(this.signUp).subscribe();
  }
}
