import { AuthService } from './../../core/services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PromApiToken } from 'src/app/core/models/prom/token.model';
import { PromService } from 'src/app/core/services/prom.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  public promTokens: PromApiToken[] = [];
  private selectedPromTokens: string[] = [];
  public newToken: PromApiToken = new PromApiToken();

  @Output() public selectedPromTokensChange: EventEmitter<string[]> = new EventEmitter();

  constructor (
    private promService: PromService, 
    private authService: AuthService, 
    ) {}

  public ngOnInit(): void {
    this.resetNewToken();
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
    if (!this.isValidToken(this.newToken)) {
      return;
    }
    this.promService.addToken(this.newToken).subscribe(_ => { 
      this.loadTokens();
      this.resetNewToken();
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
    if (promToken.isValid) {
      const token: string = this.selectedPromTokens.find(_ => _ === promToken.token);
      if (token) {
        this.promService.unselectToken(promToken.token);
        this.selectedPromTokens.splice(this.selectedPromTokens.indexOf(token), 1);
      } else {
        this.promService.selectToken(promToken.token);
        this.selectedPromTokens.push(this.promTokens.find(_ => _.token === promToken.token).token);
      }
      this.selectedPromTokensChange.emit(this.selectedPromTokens);
    }
  }

  public isSelected(promToken: PromApiToken): boolean {
    const token: string = this.selectedPromTokens.find(_ => _ === promToken.token);
    return token != null;
  }

  private isValidToken(promToken: PromApiToken): boolean {
    const existingToken: PromApiToken = this.promTokens.find(_ => _.token === promToken.token);
    return existingToken == null;
  }

  private resetNewToken(): void {
    this.newToken = new PromApiToken();
    this.newToken.userId = this.authService.getUserId();
  }
}
