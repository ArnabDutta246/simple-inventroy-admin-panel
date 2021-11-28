export interface Breadcrumb {
  name: string;
  url: string | null;
}
export interface Product {
  id: number;
  name: string;
  modal: string;
  category?: string;
  brand?: string;
  section?: 'Latest' | 'Features' | 'Offer';
  price: number;
  offerPrice?: number;
  des: string;
  quantity: number;
  image: string;
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
