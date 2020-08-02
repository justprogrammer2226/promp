import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NebularModule } from './../nebular.module';
import { TokenComponent } from './token/token.component';
import { CommonModule } from '@angular/common';
  
@NgModule({
  declarations: [
    TokenComponent,
  ],
  imports: [
    FormsModule,
    NebularModule,
    CommonModule,
  ],
  exports: [
    TokenComponent,
    CommonModule,
  ],
})
export class SharedModule { }
