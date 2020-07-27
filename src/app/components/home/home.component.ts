import { ProductAvailabilityBy } from './../../models/prom/search/search-products-params.model';
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
    availabilityBy: ProductAvailabilityBy.Name,
    selectedPromTokens: [],
  }
  public SearchProductsBy = SearchProductsBy;
  public ProductAvailabilityBy = ProductAvailabilityBy;

  constructor (private promService: PromService) {

  }

  public ngOnInit(): void {
    // this.loadProducts();
    // this.promService.getProducts().subscribe(_ => {
    //   console.log(_);
    //   _[0].name = "FINAL CHANGE NAME";
    //   this.promService.editProducts([ProductEdit.adapt(_[0])]).subscribe(res => console.log(res));
    // });
  }

  private loadProducts(): void {
    this.promService.getProducts(this.params).subscribe(_ => {
      this.products = _;
      console.log('Products', _);
      this.data = TreeNodeProduct.fromArray(this.products);
    });
  }

  public onSelectedPromTokensChange(selectedPromTokens: string[]): void {
    this.params.selectedPromTokens = selectedPromTokens;
    this.loadProducts();
  }

  public search(): void {
    this.loadProducts();
  }

  allColumns = [ 'name', 'availableInShops' ];

  data: TreeNodeProduct[] = [];
}

export class TreeNodeProduct {
  public data: Product;

  constructor(data: Product) {
    this.data = data;
  }

  public static fromArray(array: Product[]): TreeNodeProduct[] {
    return array.map(_ => new TreeNodeProduct(_));
  }
}
