import { PromApiToken } from './../models/prom/token.model';
import { Observable, of, merge, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductList } from '../models/prom/product-list.model';
import { Product } from '../models/prom/product.model';
import { ProductEdit } from '../models/prom/product-edit.model';

@Injectable({
  providedIn: 'root',
})
export class PromService {

  private promApiUrl = '/prom';

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://localhost:44372/prom/products/list').pipe(
      map(products => {
        return products.map(product => Product.adapt(product))
      })
    );
  }

  public editProducts(products: ProductEdit[]): Observable<any> {
    console.log(JSON.stringify(products));
    return this.httpClient.post('https://localhost:44372/prom/products/edit', products);
  }

  public getAllTokens(): Observable<PromApiToken[]> {
    return this.httpClient.get<PromApiToken[]>('https://localhost:44372/prom/tokens');
  }

  public addToken(token: PromApiToken): Observable<PromApiToken> {
    return this.httpClient.post<PromApiToken>('https://localhost:44372/prom/tokens', token);
  }

  public removeToken(token: PromApiToken): Observable<any> {
    return this.httpClient.delete('https://localhost:44372/prom/tokens/' + token.token);
  }
}
