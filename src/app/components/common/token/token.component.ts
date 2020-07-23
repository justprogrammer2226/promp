import { Component, Output, EventEmitter } from '@angular/core';
import { PromService } from 'src/app/services/prom.service';
import { ProductEdit } from 'src/app/models/prom/product-edit.model';
import { PromApiToken } from 'src/app/models/prom/token.model';
import { Product } from 'src/app/models/prom/product.model';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent {

  public promTokens: PromApiToken[] = [];
  private selectedPromTokens: string[] = [];
  public newToken: string;

  @Output() public selectedPromTokensChange: EventEmitter<string[]> = new EventEmitter();

  constructor (private promService: PromService) {}

  public ngOnInit(): void {
    this.loadTokens();
    this.selectedPromTokens = this.promService.getSelectedTokens();
    this.selectedPromTokensChange.emit(this.selectedPromTokens);
  }

  private loadTokens(): void {
    this.promService.getAllTokens().subscribe(_ => {
      this.promTokens = _;
    });
  }

  public addToken(): void{
    if (!this.isValidToken({token: this.newToken, isValid: Math.random() >= 0.5})) {
      return;
    }
    this.promService.addToken({token: this.newToken, isValid: Math.random() >= 0.5}).subscribe(_ => { 
      this.loadTokens();
      this.newToken = null;
    });
  }

  public removeToken(promToken: PromApiToken): void{
    this.promService.removeToken(promToken).subscribe(_ => { 
      this.loadTokens();
      if (this.isSelected(promToken)) {
        this.toggleSelection(promToken);
      }
    });
  }

  public toggleSelection(promToken: PromApiToken): void {
    const token = this.selectedPromTokens.find(_ => _ === promToken.token);
    if (token) {
      this.promService.unselectToken(promToken.token);
      this.selectedPromTokens.splice(this.selectedPromTokens.indexOf(token), 1);
    } else {
      this.promService.selectToken(promToken.token);
      this.selectedPromTokens.push(this.promTokens.find(_ => _.token === promToken.token).token);
    }
    this.selectedPromTokensChange.emit(this.selectedPromTokens);
  }

  public isSelected(promToken: PromApiToken): boolean {
    const token = this.selectedPromTokens.find(_ => _ === promToken.token);
    return token != null;
  }

  private isValidToken(promToken: PromApiToken): boolean {
    const existingToken = this.promTokens.find(_ => _.token === promToken.token);
    return existingToken == null;
  }
}
