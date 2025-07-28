//1. Standard/ Normal

function hello(){
    console.log("Hi there!");   
}
hello();

//2. Anonymous Function
unKnown = function(){
    console.log("Hello from an anonymous function!");
}
unKnown();

// generally for  callbacks we use the anonymous function  

//3.IIFE   (Immediately Invoked Function Expression)
// it does the creation plus calling of the function in one go
(function(){
    console.log("Hello from an IIFE!");
})();
//it is very important to put the semi-colon in this use .

//4. Higher Order Function -> a fucntion that takes another function as an argument or returns a function as a result
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

