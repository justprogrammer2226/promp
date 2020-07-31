import { NgModule } from '@angular/core';
import { TokenComponent } from './token/token.component';
import { NebularModule } from '../nebular.module';
import { FormsModule } from '@angular/forms';
  
@NgModule({
  declarations: [
    TokenComponent,
  ],
  imports: [
    FormsModule,
    NebularModule,
  ],
  exports: [
    TokenComponent,
  ],
})
export class SharedModule { }
