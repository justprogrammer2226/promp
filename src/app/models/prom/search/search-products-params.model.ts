import { PromApiToken } from '../token.model';

export class SearchProductsParams {
  searchText: string;
  searchBy: SearchProductsBy;
  availabilityBy: ProductAvailabilityBy;
  selectedPromTokens: string[];
}

export enum SearchProductsBy {
  Name,
  Description,
  Sku,
  Keywords,
}

export enum ProductAvailabilityBy
{
  Name,
  Sku
}