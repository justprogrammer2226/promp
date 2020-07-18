import { Component } from '@angular/core';
import { PromService } from 'src/app/services/prom.service';
import { PromApiToken } from './../../models/prom/token.model';
import { ProductEdit } from 'src/app/models/prom/product-edit.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'promp';

  public promTokens: PromApiToken[] = [];
  public newToken: string;

  constructor (private promService: PromService) {}

  public ngOnInit(): void {
    this.loadTokens();
    this.promService.getProducts().subscribe(_ => {
      console.log(_);
      _[0].name = "FINAL CHANGE NAME";
      this.promService.editProducts2([ProductEdit.adapt(_[0])]).subscribe(res => console.log(res));
    });
  }

  private loadTokens(): void {
    this.promService.getAllTokens().subscribe(_ => {
      this.promTokens = _;
    });
  }

  public addToken(): void{
    this.promService.addToken({token: this.newToken, isValid: Math.random() >= 0.5}).subscribe(_ => { 
      this.loadTokens();
      this.newToken = null;
    });
  }

  public removeToken(promToken: PromApiToken): void{
    this.promService.removeToken(promToken).subscribe(_ => { 
      this.loadTokens();
    })
  }
}
