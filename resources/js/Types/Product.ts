import { Category } from "./Category"

export interface Product {
  id?: number;
  name: string;
  url: string;
  lowest_price: number;
  image_url: string;
  user_id?: number;
  categories: Category[];
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
};