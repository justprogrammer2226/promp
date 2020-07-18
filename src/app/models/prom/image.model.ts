export class Image {
  url: string;
  thumbnail_url: string;
  id: number;

  static adapt(data): Image {
    const mappedModel = new Image();
    mappedModel.url = data.url;
    mappedModel.thumbnail_url = data.thumbnail_url;
    mappedModel.id = data.id;
    return mappedModel;
  }
}


