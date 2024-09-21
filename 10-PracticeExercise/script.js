//problem 1

let marks=[85, 97, 44, 37, 76, 60];
let totalmarks=0;
for(let i=0;i<marks.length;i++){
    totalmarks+=marks[i]
}
const avgmarks=totalmarks/6;
console.log(avgmarks);

//problem:2

let price=[85, 97, 44, 37, 76, 60] ;

let dicount_price = price.map(value => value - (value * 0.1));

console.log(dicount_price);


//problem:3

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//a
companies.shift(0)
console.log(companies); 

//b
const shiftfing= companies.concat();
shiftfing.splice(1,1, "Ola");
console.log(shiftfing);

//c
companies.push("amazone");
console.log(companies);
