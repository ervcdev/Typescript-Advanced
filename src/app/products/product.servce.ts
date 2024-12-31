import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data:Product) => {
    //data.id = 5;
    products.push(data);
}


console.log(products)
