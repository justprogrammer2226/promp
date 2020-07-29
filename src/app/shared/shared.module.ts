import { NgModule } from '@angular/core';
import { TokenComponent } from './token/token.component';
import { NebularModule } from '../nebular.module';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from './directives/must-match.directive';
  
@NgModule({
  declarations: [
    TokenComponent,
    MustMatchDirective,
  ],
  imports: [
    FormsModule,
    NebularModule,
  ],
  exports: [
    TokenComponent,
    MustMatchDirective,
  ],
})
export class SharedModule { }
