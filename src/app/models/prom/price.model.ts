export class Price {
  price: number;
  minimum_order_quantity: number;

  static adapt(data): Price {
    const mappedModel = new Price();
    mappedModel.price = data.price;
    mappedModel.minimum_order_quantity = data.minimum_order_quantity;
    return mappedModel;
  }
}
