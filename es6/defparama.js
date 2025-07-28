//normal function
function add(a,b)
{
    console.log(a+b);
}
add(2,3);


function def(a,b,c)
{
    console.log(a+b+c);
}
def(2,3);//output will be NaN as c is undefined and adding a number to an undefined variable will not be a number.

add(2,3);
add(2,3,4);//output will be NaN as c is undefined and adding a number to an undefined variable will not be a number.

//default parameter
function newAdd(a,b,c=0)
{
    console.log(a+b+c);
}
newAdd(10,20);
newAdd(10,40,50);