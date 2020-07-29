export class Group {
  id: number;
  name: string;

  static adapt(data): Group {
    const mappedModel = new Group();
    mappedModel.id = data.id;
    mappedModel.name = data.name;
    return mappedModel;
  }
}
