export const createProduct = (
  id: string|number,
  isNew: boolean,
  stock?: number

) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}
// 0 === false
// '' === false
// false === false

const rta = createProduct(1,true,2);
console.log(rta);

const rta1 = createProduct(1,true);
console.log(rta1);

const rta2 = createProduct(1,false,0)
console.log(rta2);




