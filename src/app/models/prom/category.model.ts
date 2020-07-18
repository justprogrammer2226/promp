export class Category {
  id: number;
  caption: string;

  static adapt(data): Category {
    const mappedModel = new Category();
    mappedModel.id = data.id;
    mappedModel.caption = data.caption;
    return mappedModel;
  }
}
