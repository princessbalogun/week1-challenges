// task1 create an array of 5 favourite drinks
let favouriteDrinks = [
    'fanta',
    'hot chocolate', 
    'dr pepper', 
    'lemonade', 
    'malt'
];


favouriteDrinks.splice(1, 2);
console.log(favoriteDrinks);



// task2 generate a random integer between 1 and 80
let randomInteger = Math.floor(Math.random() * 80) + 1;

console.log(randomInteger);




// task3 generate a random number between 1 and 6
let diceRoll = Math.floor(Math.random() * 6) + 1;

console.log("You rolled a " + diceRoll);



// task 4 create a variable called password
let password = "secretpassword";

if (password.length < 6) {
  console.log("Password too short");
} else {
  console.log("Password length is " + password.length + ", thank you!");
}


// task 5 create two boolean variables
let bool1 = true;
let bool2 = false;

if (bool1 !== bool2) {
  console.log(true);
} else {
  console.log(false);
}



// task 6 create a variable called num and check if it's divisible by 3 or 5
let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("fizz buzz");
} else if (num % 3 === 0) {
  console.log("fizz");
} else if (num % 5 === 0) {
  console.log("buzz");
} else {
  console.log(num);
}
