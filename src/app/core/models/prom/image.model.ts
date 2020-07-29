export class Image {
  url: string;
  thumbnailUrl: string;
  id: number;

  static adapt(data): Image {
    const mappedModel = new Image();
    mappedModel.url = data.url;
    mappedModel.thumbnailUrl = data.thumbnailUrl;
    mappedModel.id = data.id;
    return mappedModel;
  }
}


