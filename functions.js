function myFunction(){
    console.log("Hello");
}

function functionWithParams(a,b){
    console.log(a + b);
}

function functionWithReturn(a,b){
    return a + b;
}

var someFunction = function(a,b){
    console.log(a + b);
}

myFunction();
functionWithParams("Hello ", "World");
var a = functionWithReturn("Hello ", "World");
console.log(a);
someFunction("Hello ", "World");

