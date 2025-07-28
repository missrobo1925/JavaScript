//filter is a higher order function that creates a new array with all elements that pass the test implemented by the provided function
var arr=[2,4,8,90,23,13,45,67,89];
function isEven(x)
{
    return x % 2 === 0;
}

function isOdd(x)
{
    return x % 2 === 1;
}
var evens=arr.filter(isEven);
console.log(evens); // [2, 4, 8, 90]

var odds=arr.filter(isOdd);
console.log(odds);

