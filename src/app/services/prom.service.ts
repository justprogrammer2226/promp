import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductEdit } from '../models/prom/product-edit.model';
import { Product } from '../models/prom/product.model';
import { SearchProductsParams } from '../models/prom/search/search-products-params.model';
import { PromApiToken } from './../models/prom/token.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PromService {

  constructor(private httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  public getProducts(params: SearchProductsParams): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://localhost:44372/prom/products/list', {params: params as any}).pipe(
      map(products => {
        return products.map(product => Product.adapt(product))
      })
    );
  }

  public editProducts(products: ProductEdit[]): Observable<any> {
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

  public getSelectedTokens(): string[] {
    if (isPlatformBrowser(this.platformId)) {
      const tokens = JSON.parse(localStorage.getItem('prom-tokens')) as string[] || [];
      return tokens;
    }
    return [];
  }

  public selectToken(token: string): void {
    const tokens = JSON.parse(localStorage.getItem('prom-tokens')) as string[] || [];
    tokens.push(token);
    localStorage.setItem('prom-tokens', JSON.stringify(tokens));
  }

  public unselectToken(token: string): void {
    let tokens = JSON.parse(localStorage.getItem('prom-tokens')) as string[] || [];
    tokens = tokens.filter(_ => _ != token);
    localStorage.setItem('prom-tokens', JSON.stringify(tokens));
  }
}
