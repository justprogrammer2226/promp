import { Discount } from './discount.model';
import { Price } from './price.model';

export class ProductEdit {
  id: number;
  presence: string;
  presence_sure: boolean;
  price: number;
  status: string;
  prices: Price[];
  discount: Discount;
  name: string;
  keywords: string;
  description: string;
  usedToken: string;

  static adapt(data): ProductEdit {
    const mappedModel = new ProductEdit();
    mappedModel.id = data.id;
    mappedModel.name = data.name;
    mappedModel.keywords = data.keywords;
    mappedModel.description = data.description;
    mappedModel.presence = data.presence;
    mappedModel.presence_sure = data.presence_sure;
    mappedModel.price = data.price;
    mappedModel.status = data.status;
    mappedModel.usedToken = data.usedToken;

    if (data.discount) mappedModel.discount = Discount.adapt(data.discount);

    if (data.prices && data.prices.length > 0) mappedModel.prices = data.prices.map(element => Price.adapt(element));

    return mappedModel;
  }
}
