export class PromApiToken {
  token: string;
  isValid: boolean;

  static adapt(data): PromApiToken {
    const mappedModel = new PromApiToken();
    mappedModel.token = data.token;
    mappedModel.isValid = data.isValid;
    return mappedModel;
  }
}
