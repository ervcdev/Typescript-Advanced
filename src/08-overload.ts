// ERVIN => [E,R,V,I.N] => string > []
// [E,R,V,I,N] = ERVIN => [] > string

export function parseStr(input:string | string[]){
  if(Array.isArray(input)){
    return input.join(''); //string
  }else {
    return input.split('');
  }
}

const rtaArray = parseStr('Ervin');
console.log(rtaArray);

const rtaStr = parseStr(['E','R','V','I','N']);
console.log(rtaStr);
