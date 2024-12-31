let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = 1;

if(typeof unknownVar ===  'string'){
    unknownVar.toUpperCase();
}

const parse = (str:  string):unknown => {
    return JSON.parse(str);
}




