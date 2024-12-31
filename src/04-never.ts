const withoutEnd = () => {
    while( true) {
        console.log('pensar');

    }
 }


const fail = (message: string) => {
    throw new Error(message)
}

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return 'hay un error';
        //console.log('hay un error');

    } else if (Array.isArray(input)) {
        return 'Es un array';
    }
    return fail ('not match');

}

console.log(example('HOla'));
console.log(example([1,2,5,5,8]));

const shouldExecute = false;

if (shouldExecute) {
    console.log("Este código no se ejecutará porque shouldExecute es false.");
} else {
    console.log("El código fue omitido de manera controlada.");
}



