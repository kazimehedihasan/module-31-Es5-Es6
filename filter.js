/*
filter selects elements based on a conditiion and returns an array with the 
elements that fulfilled the condition
*/ 

const numbers = [1, 3, 6, 9, 4,33];
const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter(p => p > 70);
// console.log(selected);

const selected = players.filter(x => x % 2 === 1);
console.log(selected);


const friends = ['tom', 'john', 'micheal', 'oliver'];
const oddFriends = friends.filter(X => X.length > 4 )
console.log(oddFriends);