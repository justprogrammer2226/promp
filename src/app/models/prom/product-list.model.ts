import { Product } from './product.model';

export class ProductList {
  group_id: number;
  products: Product[];

  static adapt(data): ProductList {
    const mappedModel = new ProductList();
    mappedModel.group_id = data.group_id;
    if (data.products) mappedModel.products = data.products.map(element => Product.adapt(element));
    return mappedModel;
  }
}
