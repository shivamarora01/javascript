const arr = [23,21,24,25,5,54,85,287]

// 0 = initialvalue
//If an initial value is supplied, this is used, and the iteration starts from array element 0.
const result = arr.reduce(getsum , 0)

function getsum(acc,currval){
    console.log( ` the total val from begining is ${acc} and the current value is ${currval} `)
    return acc +  Math.round(currval);
}

console.log(result);


//if no initialvalue provided
//At the first callback, there is no return value from the previous callback.
//Normally, array element 0 is used as initial value, and the iteration starts from array element 1.

const result2 = arr.reduce(getsubtract)

function getsubtract(acc,currval){
    console.log( ` the total val from begining is ${acc} and the current value is ${currval} `)
    return acc -  currval;
}
console.log(result2);