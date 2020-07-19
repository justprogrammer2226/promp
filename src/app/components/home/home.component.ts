import { Product } from './../../models/prom/product.model';
import { Component } from '@angular/core';
import { PromService } from 'src/app/services/prom.service';
import { PromApiToken } from './../../models/prom/token.model';
import { ProductEdit } from 'src/app/models/prom/product-edit.model';
import { SearchProductsParams, SearchProductsBy } from 'src/app/models/prom/search/search-products-params.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public products: Product[] = [];
  public params: SearchProductsParams = {
    searchText: '',
    searchBy: SearchProductsBy.Name,
    selectedPromTokens: [],
  }
  public SearchProductsBy = SearchProductsBy;

  constructor (private promService: PromService) {}

  public ngOnInit(): void {
    this.loadProducts();
    // this.promService.getProducts().subscribe(_ => {
    //   console.log(_);
    //   _[0].name = "FINAL CHANGE NAME";
    //   this.promService.editProducts([ProductEdit.adapt(_[0])]).subscribe(res => console.log(res));
    // });
  }

  private loadProducts(): void {
    this.promService.getProducts(this.params).subscribe(_ => {
      this.products = _;

      console.log(_);
    });
  }

  public onSelectedPromTokensChange(selectedPromTokens: PromApiToken[]): void {
    this.params.selectedPromTokens = selectedPromTokens.map(_ => _.token);
    this.loadProducts();
  }

  public search(): void {
    this.loadProducts();
  }
}
