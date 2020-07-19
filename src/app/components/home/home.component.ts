import { Product } from './../../models/prom/product.model';
import { Component } from '@angular/core';
import { PromService } from 'src/app/services/prom.service';
import { PromApiToken } from './../../models/prom/token.model';
import { ProductEdit } from 'src/app/models/prom/product-edit.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public products: Product[] = [];

  constructor (private promService: PromService) {}

  public ngOnInit(): void {
    this.loadProducts();
    // this.promService.getProducts().subscribe(_ => {
    //   console.log(_);
    //   _[0].name = "FINAL CHANGE NAME";
    //   this.promService.editProducts([ProductEdit.adapt(_[0])]).subscribe(res => console.log(res));
    // });
  }

  private loadProducts(selectedPromTokens: PromApiToken[] = null): void {
    this.promService.getProducts(selectedPromTokens).subscribe(_ => {
      this.products = _;

      console.log(_);
    });
  }

  public onSelectedPromTokensChange(selectedPromTokens: PromApiToken[]): void {
    this.loadProducts(selectedPromTokens);
  }
}
