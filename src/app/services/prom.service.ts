import { PromApiToken } from './../models/prom/token.model';
import { Observable, of, merge, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductList } from '../models/prom/product-list.model';
import { Product } from '../models/prom/product.model';

@Injectable({
  providedIn: 'root',
})
export class PromService {

  private promApiUrl = '/prom';
  private apiTokens: PromApiToken[] = [];
  private _areTokensPreloaded = false;

  constructor(private httpClient: HttpClient) { }

  // Init method
  public loadTokens(): Observable<any> {
    // TODO load saved tokens from our api
    this.apiTokens.push({token:'ec030be1b678240463273d428448e69d00f9ffb0'});
    this._areTokensPreloaded = true;
    return of({});
  }

  public get areTokensPreloaded(): boolean {
    return this._areTokensPreloaded;
  }

  private atLeastOneTokenExists(): boolean {
    return this.apiTokens.length != 0;
  }

  public addToken(token: PromApiToken): Observable<any> {
    // Add token in cache after saving
    this.apiTokens.push(token);
    return of({});
  }

  public removeToken(token: PromApiToken): Observable<any> {
    // Remove token from cache after removing
    const existingElement = this.apiTokens.find(_ => _.token == token.token);
    this.apiTokens.splice(this.apiTokens.indexOf(existingElement), 1);
    return of({});
  }

  public getProducts(): Observable<Product[]> {
    if (!this.atLeastOneTokenExists()) throw new Error('There are no tokens. Perhaps you forgot to load tokens.');
    const headers = this.getAllHeaders(this.apiTokens);
    const requests = headers.map(header => this.httpClient.get<ProductList>(this.promApiUrl + '/products/list', { headers: header })
      .pipe(map(response => response.products.map(element => Product.adapt(element)))));
    return forkJoin(requests)
      .pipe(map(data => data.reduce((result, arr) => [...result, ...arr], [])));
  }

  public saveProducts(products: Product[]): Observable<any> {
    return this.httpClient.post(this.promApiUrl + '/products/edit', products);
  }

  // Generates headers for each api token
  private getAllHeaders(tokens: PromApiToken[]): HttpHeaders[] {
    return tokens.map(token => {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      headers = headers.set('Authorization', `Bearer ${token.token}`);
      return headers;
    });
  }

}
