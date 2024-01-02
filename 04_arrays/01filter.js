const ages = [12,13,56,74,44,40,23,30,34]
const result = ages.filter(above18);

//filter is method accepts a function and parameters 
//on which it runs a given condition
// and outputs elements of an array as a new array

function above18(age,index,arr){
       return age > 18;
}
console.log(result);

//arr is random(optional)
//index is index(optional)
//age is a requiered parameter