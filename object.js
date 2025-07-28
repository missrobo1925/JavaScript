//JSON -> JavScript Object Notation
/* {key :value, key2 : value2, ...} */
//JSON is a text format that is completely language independent but uses conventions that are familiar to programmers
var alpha ={ '1': "A", '2': "B", '3': "C", '4': "D", '5': "E" };
console.log(alpha,typeof(alpha));

console.log(Array.isArray(alpha)); //false, because alpha is an object, not an array
console.log(alpha['3']);

for (var key in alpha) {
    console.log(key, alpha[key]);
}   