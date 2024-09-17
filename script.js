// Exercise 1: Applying Array.prototype.map()

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const newNums = nums.map((el) => {
    return el * 2;
});

console.log('Map()----------------------------------------');
console.log(newNums);

////////////////////////////////////////////////////\
// Exercise 2: Array destructuring

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [toppingOne, toppingTwo] = pizzaToppings;

console.log('Arr Destructuring----------------------------');
console.log(toppingOne);
console.log(toppingTwo);

/////////////////////////////////////////////////\
// Exercise 3: Destructuring objects

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
};

// Your code here
const {make, model} = car;

console.log('Obj Destructuring----------------------------');
console.log(make);
console.log(model);
// Unlike array destructuring, where elements are matched based on their position, the variables created in object destructuring, such as const { name, role }, need to match the names of existing properties in the object.

/////////////////////////////////////////////////\
// Exercise 4: Applying the spread operator on arrays

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']; Commented cause this array exist already on line 18!

// Your code here
console.log('Spread Operator on Arrays------------------------------');
const controversialPizzaToppings = [...pizzaToppings];
console.log(controversialPizzaToppings);

/////////////////////////////////////////////////\
// Exercise 5: Applying the spread operator on objects

// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',  Commented cause this array exist already on line 36!
//     model: 'q5',
// };
  
// Change the `model` property of `myCar` to 'q7'. Log both objects.
  
// Your code here
console.log('Spread Operator on Objects------------------------------');
const myCar = {...car};
myCar.model = 'q7';
console.log(car);
console.log(myCar);

/////////////////////////////////////////////////\
// Exercise 6: Dynamic keys in objects

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
console.log('Dynamic keys on Obj------------------------------');
const userProfile = {};
const propertyName = 'username';
userProfile[propertyName] = 'Alex'
console.log(userProfile)

/////////////////////////////////////////////////\
// Exercise 7: Import and Export
// Was npm init -y and the creation of two files along with importing and exporting practices.

/////////////////////////////////////////////////\
// Exercise 8: Default parameters

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
console.log('Default parameters------------------------------');
const sentence = (noun = 'cat', adjetive = 'white') => {
    console.log(`The ${noun} is ${adjetive}`)
}
sentence()

/////////////////////////////////////////////////\
// Exercise 9: Ternary operator

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
let tester;
const exerciseNine = pizza === 'tasty' ? tester = 'yum' : tester = 'yuck';
console.log(`The pizza is ${tester}`)