//Window always declared in Global space as soon as execution context declared
//and this keyword too declared which refers to the window object

var a = 7;
function b(){
    var x = 9;
}
// a can be traced in Window
this == Window //  true
console.log(this.a)
console.log(Window.a);
// but x can't as it declared in Local scope not come in window 
// check it in browser console
console.log(Window.x);