import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignInModel } from './../../../core/models/auth/sign-in.model';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public signIn = new SignInModel();
  public returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public submit(): void {
    console.log(this.signIn);
    this.authService.signIn(this.signIn).subscribe(_ => {
      console.log(_);
      localStorage.setItem('token', _.token);
    });
  }
}
