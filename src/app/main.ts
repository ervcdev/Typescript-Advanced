import { addProduct } from './products/product.servce'
addProduct({
  id: '1',
  title: 'P1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 90,
  Category: {
    id: '12',
    name: 'c1',
    createdAt:new Date(),
    updatedAt: new Date(),

  }
})
