export class Price {
  price: number;
  minimumOrderQuantity: number;

  static adapt(data): Price {
    const mappedModel = new Price();
    mappedModel.price = data.price;
    mappedModel.minimumOrderQuantity = data.minimumOrderQuantity;
    return mappedModel;
  }
}
