
// spread operatr = ... allows an iterateable such as an array or string to be expanded into separate elements
let numbers = [1,2,3,4,5,11]

// determine the highest number
// let maximum = Math.max (numbers);
//this will give Nan error
let maximum = Math.max(...numbers)
let minimum = Math.min(...numbers)
//console log it

console.log(maximum)

let username = "Olumide Oyedokun";
console.log(username);
let letters = [...username]

// //console  log the result
console.log(letters)
// //to join the letters character u can do
let letters2 = [...username].join("")
console.log(letters2)

// //example 2

let meats = ["beef", "chicken", "goat", "pork"]

let drinks = ["fanta", "soda", "coke"]
//we can combine two or more arrays with it

let vegetables = ['carrots', 'tete',  'ugwu']

let foods = [...meats, ...drinks, ...vegetables, "eggs", "milks"]

console.log(foods)