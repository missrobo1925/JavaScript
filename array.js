var games =['football', 'basketball', 'tennis', 'cricket', 'hockey'];
//adding one more element in the array
games.push("ping pong");
console.log(games);
console.log (typeof games);
console.log("-------for loop-------");
for (var i = 0; i < games.length; i++) {

    console.log(games[i], typeof games[i]);
}

console.log("---------while loop-------");
var j=0;
while(j<games.length) {
    console.log(games[j], typeof games[j]);
    j++;
}

console.log("---------do while loop-------");
var i=0;
do{
    console.log(games[i]);
    i++;
}while(i<games.length)

console.log("---------for in loop-------");
for(var index in games){
    console.log(index,games[index]);
}

console.log("-----indexing in JS using either the at() or[] operator-------");
console.log(games[3]);
console.log(games.at(4))

console.log("----------the join() method-------");
console.log(games.join(" $ "));

console.log("----------pop() method---------");
console.log(games.pop());
var removed = games.pop();
console.log(removed);

delete games[1];
console.log(games);


console.log("----------for-each() method---------");
function disp(value,index,array)
{
    console.log(index,value,array);
}
games.forEach(disp);

 // Example of map()
 var upperCaseGames = games.map(game => game.toUpperCase());
 console.log("Mapped array (uppercase):", upperCaseGames);