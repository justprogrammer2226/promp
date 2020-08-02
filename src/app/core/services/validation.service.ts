import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductEdit } from '../models/prom/product-edit.model';
import { Product } from '../models/prom/product.model';
import { SearchProductsParams } from '../models/prom/search/search-products-params.model';
import { PromApiToken } from '../models/prom/token.model';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {

  constructor() { }

  public validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
