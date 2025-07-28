//create  number array and then we need to sort it
var nums=[19,16,27,20,29];
console.log(nums);

function orderScores(a,b)
{
    return b-a;
}
nums.sort(orderScores);
console.log(nums);
