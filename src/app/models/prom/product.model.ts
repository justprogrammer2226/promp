import { Category } from './category.model';
import { Discount } from './discount.model';
import { Group } from './group.model';
import { Image } from './image.model';
import { Price } from './price.model';

export class Product {
  id: number;
  externalId?: number;
  name: string;
  sku: string;
  keywords: string;
  description: string;
  sellingType: string;
  presence: string;
  presenceSure: boolean;
  price: number;
  minimumOrderQuantity?: number;
  discount: Discount;
  currency: string;
  group: Group;
  category: Category;
  prices: Price[];
  mainImage: string;
  images: Image[];
  status: string;
  usedToken: string;
  availableInShops: number;

  static adapt(data): Product {
    const mappedModel = new Product();
    mappedModel.id = data.id;
    mappedModel.externalId = data.externalId;
    mappedModel.name = data.name;
    mappedModel.sku = data.sku;
    mappedModel.keywords = data.keywords;
    mappedModel.description = data.description;
    mappedModel.sellingType = data.sellingType;
    mappedModel.presence = data.presence;
    mappedModel.presenceSure = data.presenceSure;
    mappedModel.price = data.price;
    mappedModel.minimumOrderQuantity = data.minimumOrderQuantity;
    mappedModel.currency = data.currency;
    mappedModel.mainImage = data.mainImage;
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
