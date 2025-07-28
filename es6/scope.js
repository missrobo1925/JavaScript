let a = 10;
function abc() {
    console.log(a);
    let a =20;// this will cause a ReferenceError due to temporal dead zone and hoisting is not allowed , it doesn't allow to use the ariable before declaring it 

}
abc();
console.log(a); // Outputs: 10, as `a` is in the global scope

//block scope
let b=30;
function def()
{
    let b=40;
    console.log(b);
    if(true)
    {
        let b=50;
        console.log(b); // Outputs: 50, as `b` is block scoped
    }
    console.log(b);
}
def();
console.log(b);
//output: 40 50 40 30
//here we can go for redecalration as now we are considering blockwise also.
//both const and let allow block scope