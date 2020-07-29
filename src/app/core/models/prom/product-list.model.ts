import { Product } from './product.model';

export class ProductList {
  groupId: number;
  products: Product[];

  static adapt(data): ProductList {
    const mappedModel = new ProductList();
    mappedModel.groupId = data.groupId;
    if (data.products) mappedModel.products = data.products.map(element => Product.adapt(element));
    return mappedModel;
  }
}
