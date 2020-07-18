export class Discount {
  value: number;
  type: string;
  date_start: string;
  date_end: string;

  static adapt(data): Discount {
    const mappedModel = new Discount();
    mappedModel.value = data.value;
    mappedModel.type = data.type;
    mappedModel.date_start = data.date_start;
    mappedModel.date_end = data.date_end;
    return mappedModel;
  }
}
