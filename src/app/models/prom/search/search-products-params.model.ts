import { PromApiToken } from '../token.model';

export class SearchProductsParams {
  searchText: string;
  searchBy: SearchProductsBy;
  selectedPromTokens: string[];
}

export enum SearchProductsBy {
  Name,
  Description,
  Sku,
  Keywords,
}
