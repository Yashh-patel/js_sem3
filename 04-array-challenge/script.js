
/*
chalange:1
*/
const arr = [1, 2, 3, 4, 5];


arr.push(6) 
arr.reverse()
arr.push(0)
console.log(arr);
/*
chalange:2
*/
// one way to do this chalnage 
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// another way to do this chalnage

let arry=arr1.concat(arr2)
console.log(arry);