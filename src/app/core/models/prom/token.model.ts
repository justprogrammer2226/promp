export class PromApiToken {
  id: string;
  token: string;
  shopName: string;
  isValid: boolean;
  userId: string;

  static adapt(data): PromApiToken {
    const mappedModel = new PromApiToken();
    mappedModel.id = data.id;
    mappedModel.token = data.token;
    mappedModel.shopName = data.shopName;
    mappedModel.isValid = data.isValid;
    mappedModel.userId = data.userId;
    return mappedModel;
  }
}
