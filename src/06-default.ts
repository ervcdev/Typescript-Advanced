export const createProduct = (
  id: string|number,
  isNew: boolean = true,
  stock: number = 20

) => {
  return {
    id,
    stock ,
    isNew
  }
}
// 0 === false
// '' === false
// false === false

const rta = createProduct(1,true,2);
console.log(rta);

const rta1 = createProduct(1,true);
console.log(rta1);

const rta2 = createProduct(1)
console.log(rta2);




