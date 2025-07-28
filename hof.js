//higher order function

function demo(fx) {
    fx();
}

function abc (){
    console.log("abc called");
}

demo(abc);

// demo is the higher order function that takes another function abc as an argument
//abc is called  a callback function
//demo calls abc function

// for-each is a higher order function
var arr = [1, 2, 3, 4, 5];  
function disp(v)
{
    console.log(v);}
 arr.forEach(disp); //for-each is a higher order function that takes disp as a callback function    

