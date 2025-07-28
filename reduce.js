//reduce is a higher-order function that applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
var numbers = [1, 2, 3, 4, 5];
var sum=numbers.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
console.log("Sum:", sum); // Output: 15
//it can be used for tasks like summing up values, concatenating strings, counting occurrences, flattening arrays, finding minimum and maxmum values in the array,.
//if we want to do the sum of the elements in the array starting with an initial value 

var initial_value = 10; // Starting value for the sum
var sum = numbers.reduce(function(acc,currVal)=>
{
    return acc+currVal;
} , initial_value);
