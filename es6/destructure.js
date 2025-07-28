let arr=[23,14,5,7,56,89,90,45,34,21]
//let a=arr[0]
//let b=arr[1]
let[a ,b]=arr//destructuring
let[x,y,...c]=arr//destructuring with rest operator
console.log(a,b,c)
/***** destructuring works with arrays and objects */
const emp={
    name:"John",
    age:30,
    city:"New York"}

let {eid,...erest}=emp
console.log(eid,erest) // Outputs: undefined { name: 'John', age: 30, city: 'New York' }