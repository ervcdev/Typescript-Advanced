import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";
type Sizes = 'S' | 'M' | 'L' | 'X';
export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?:Sizes;
  Category: Category;
}
