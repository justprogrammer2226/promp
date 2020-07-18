export class PromApiToken {
  token: string;

  static adapt(data): PromApiToken {
    const mappedModel = new PromApiToken();
    mappedModel.token = data.token;
    return mappedModel;
  }
}
