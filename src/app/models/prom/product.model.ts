import { Category } from './category.model';
import { Discount } from './discount.model';
import { Group } from './group.model';
import { Image } from './image.model';
import { Price } from './price.model';

export class Product {
  id: number;
  external_id?: number;
  name: string;
  sku: string;
  keywords: string;
  description: string;
  selling_type: string;
  presence: string;
  presence_sure: boolean;
  price: number;
  minimum_order_quantity?: number;
  discount: Discount;
  currency: string;
  group: Group;
  category: Category;
  prices: Price[];
  main_image: string;
  images: Image[];
  status: string;
  usedToken: string;
  availableInShops: number;

  static adapt(data): Product {
    const mappedModel = new Product();
    mappedModel.id = data.id;
    mappedModel.external_id = data.external_id;
    mappedModel.name = data.name;
    mappedModel.sku = data.sku;
    mappedModel.keywords = data.keywords;
    mappedModel.description = data.description;
    mappedModel.selling_type = data.selling_type;
    mappedModel.presence = data.presence;
    mappedModel.presence_sure = data.presence_sure;
    mappedModel.price = data.price;
    mappedModel.minimum_order_quantity = data.minimum_order_quantity;
    mappedModel.currency = data.currency;
    mappedModel.main_image = data.main_image;
    mappedModel.status = data.status;
    mappedModel.usedToken = data.usedToken;
    mappedModel.availableInShops = data.availableInShops;

    if (data.discount) mappedModel.discount = Discount.adapt(data.discount);
    if (data.group) mappedModel.group = Group.adapt(data.group);
    if (data.category) mappedModel.category = Category.adapt(data.category);

    if (data.prices && data.prices.length > 0) mappedModel.prices = data.prices.map(element => Price.adapt(element));
    if (data.images && data.prices.images > 0) mappedModel.images = data.images.map(element => Image.adapt(element));

    return mappedModel;
  }
}
