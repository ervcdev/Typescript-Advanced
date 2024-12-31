type Sizes = 'S' | 'M' | 'L' | 'X';

interface Product2  {
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    size?:Sizes;
}

const products: Product2[] = [];

products.push({
    id: '1',
    title: 'P1',
    createdAt: new Date(),
    stock: 90
})

const addProduct = (data:Product2) => {
    products.push(data);
}

console.log(products);







