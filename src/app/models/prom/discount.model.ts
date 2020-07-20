export class Discount {
  value: number;
  type: string;
  dateStart: string;
  dateEnd: string;

  static adapt(data): Discount {
    const mappedModel = new Discount();
    mappedModel.value = data.value;
    mappedModel.type = data.type;
    mappedModel.dateStart = data.dateStart;
    mappedModel.dateEnd = data.dateEnd;
    return mappedModel;
  }
}
