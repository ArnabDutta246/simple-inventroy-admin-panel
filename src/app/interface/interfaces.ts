export interface Breadcrumb {
  name: string;
  url: string | null;
}
export interface Product {
  id: number;
  name: string;
  modal: string;
  brand?: string;
  section?: 'Latest' | 'Features' | 'Offer';
  price: number;
  des: string;
  quantity: number;
  image: string;
  orderQuantity?:number;
  category?:string|null;
  featureCol?:boolean;
  latestCol?:boolean;
  offerCol?:boolean;
  offerPrice?:number|null;
}
export interface Cart {
  id: number;
  name: string;
  modal: string;
  category?: string;
  price: number;
  quantity: number;
  offerPrice?: number;
  image: string;
}
