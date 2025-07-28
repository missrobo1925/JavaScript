//scope in javascript is used to define the visibility and lifetime of variables and functions.
//reduce is a higher-order function that applies a function against an accumulator and each element in the


var a  = 10;//global scope
console.log(a);
function abc()
{
    var b = 20;//fucntion scope
    console.log(b);
}
abc();
console.log(b);



var a =35;//global scope
console.log(a);

function abc(){
    console.log(a); // it's value is undefined as it is already declared withih the function but not assigned any value yet
    //hoisting :using the variable before it is declared
    var a = 29;
    console.log(a);
}


function def(){
    console.log(a);
    if(true)
    {
        var a=45;
        console.log(a);
    }
    console.log(a);
}

function def(){
    console.log(a);
    if(false)
    {
        var a=45;
        console.log(a);
    }
    console.log(a);
}

// if we don't write var inside a function it will become glbal in scope
var a=56;//global
console.log(a);
function abc()
{
    b=20;
}
abc();
console.log(a);

//3. closure scope

var a;
function outer()
{
    var b;//closure scope
    function inner()
    {
        var c;
    }
}
//so here the variable b is not accessible outside the outer function, 
// but it can be accessed by the inner function. It is more than the global scope but 
//not more than the function scope.