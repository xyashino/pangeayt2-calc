export interface ItemData {
  name: string;
  quantity: number;
}

export interface ItemDataResponse {
  name: string;
  price: number;
  quantity: number;
  src?: string | null | undefined;
  url: string;
}
