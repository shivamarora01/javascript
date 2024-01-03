//Hoisting is phenomenon in javascript in which you can use variables 
//and function even without prior 
//declaring them


var x = 7;
function getname() {
    console.log("Hie Sieey")
}

getname();
console.log(x);
