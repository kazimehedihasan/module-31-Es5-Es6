
// step 1

// const numbers = [4, 5, 2, 8, 10];
// const doubled = [];
// for (const num of numbers) {
//     const doubl = num * 2;
//     doubled.push(doubl);
// }
// console.log(doubled);



//  step 2
/*
map ==> loops through each element of the array and do the operation that you
 passed in the call back function and hold the result from each operation in an
  array and finally returans you the array
*/ 
const number = [4, 5, 2, 8, 10];

function doubleIt (num){
    // console.log('num now', num);
    return num * 2;
}
const result = number.map(doubleIt)
// console.log(result);


const numbers = [12, 10, 9, 15, 7];
const doubled = numbers.map(num => num * 2);

const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

const friends = ['tom', 'john', 'micheal', 'oliver'];
const lengths = friends.map(frnd => frnd.length)
console.log(lengths);
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);