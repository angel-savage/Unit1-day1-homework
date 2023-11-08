// SECTION 1
// What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
// DRY stands for "Don't Repeat Yourself"
// We pay attention to it so we can avoid code repetion and increase our efficiency
// Javascript is the programming tool

//What is the difference between const and let and var? 
// "const" variables cannot be reassigned another value
//"let" and "var" variables can be reassigned another value


// SECTION 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

// a _ b ; a < b ; (4 < 53); // true
if (4 < 53) {
    console.log ("True")
} else {
    console.log ("False")
}

// c _ d ; ; c > d ; (57 > 16); // true
if (57 > 16) {
    console.log ("True")
} else {
    console.log ("False")
}

// 'Name' _ 'Name' ; 'Name' === 'Name'; // true
if ('Name' === 'Name') {
    console.log ("True")
} else {
    console.log ("False")
}

// a _ b _ c ; ((4+53)===75) ; // true
if((4 + 53) === 57) {
    console.log ("True")
} else {
    console.log ("False")
}

// a _ a _ d ; ((4*4) === 16); // true
if ((4*4) === 16) {
    console.log ("True")
} else {
    console.log ("False")
}

// e _ 'Kevin' ; ('Kelvin' !== 'Kevin'); // true
if ('Kelvin' !== 'Kevin') {
    console.log ("True")
} else {
    console.log ("False")
}

// 48 _ '48' ; (48 == '48'); // true
if (48 == '48') {
    console.log ("True")
} else {
    console.log ("False")
}

// f _ e ; (false !== 'Kelvin') // true
if (false !== 'Kelvin') {
    console.log ("True")
} else {
    console.log ("False")
}

// Set a new variable g to 0
var g = 0;

// console.log g // 0
console.log(g)

// Then set the variable g to be equal to b + c ; 110
var g = (b + c)

// console.log g // 
console.log(g)

//Did you use const, let or var? Why did you choose the one you chose?
// I used var
// I used var as the value g will be reassigned from 0 to 110 (b+c)

//What happens if you don't use const , let or var? Do you get an error? If so what does it say?
// If I do not use var and used const or ler, I will get an error
// The error said Identifier 'g' has already been declared

// what happens if you write 10 = g?
/// it will return an error saying "Invalid left-hand side in assignment"

// Bonus Challenge
// a _ (b || f) _ !f && e _ c
if (4 < (53 || false) === !false && 'Kelvin' !== 57)
{
    console.log ("True")
} else {
    console.log ("False")
}


//SECTION 3
// Is the code below an infinite loop? Why or why not? // while (true)
// Yes, the code is an infinite loop
// The value in () is true

// Is this loop an infinite loop? Why or why not? // const runProgram = true;
// No, it is not an infinite loop
// the value of runProgram (true) is not equal to false

// Infinite or not infinite? What is the expected output?
// Not inifinte, the expected output is an error as the value of runProgram is constant and not equal to false


let letters = "A"; 
let i = 0; 

while (i < 20) { //starts a while loop that will run as long as i is less than 20
	letters += "A";  // concatenation - adds a string of A to every loop result 
	i++; // increase the value of i by 1
} // closes the while loop

console.log(letters); 


//SECTION 4
// A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
// For loop is used when the number of iterations is known,
// while loop is used when the number of iterations is known and will continue to execute until the statement in the program is proved wrong

// What are the three components of the control panel? Each component is separated by a semicolon ;
// The first part of the control panel is: declaration
// The second part of the control panel is: while loop
// The third part of the control panel is; increament

// Write a for loop that will console.log the numbers 0 to 999.
for (let i = 0; i < 999; i++) {
	console.log(i);
}

// Bonus Challenge (optional)
// What is the difference between \ (backslash, above the enter/return key) and / (forward slash or just slash, shares the key with the ?)? What is \ doing in the string?
console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
console.log("Without you, today's emotions are the scurf of yesterday's");

//  write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.
for (let i = 999; i >= 0; i--) {
	console.log(i);
}

// Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.
// The loop should run from 1 to 10.
for (let i = 1; i <= 10; i++) {
	console.log("The value of i is", i , "out of 10");
}

// Iteration
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

// Iterate over the StarWars array and print each element to the console.
for (let i = 0; i < StarWars.length; i++){
	console.log (StarWars[i])
}

// Iterate over the StarWars array again and print each character's name as well as the value of i.
for (let i = 0; i < StarWars.length; i ++){
	if (i % 2 == 0)
	console.log (StarWars[i])
}

// Bonus Challenge (optional):
// Figure out how to iterate over every second element of the StarWars array, starting with the first element
for (let i = 0; i < StarWars.length; i = i + 2){
    console.log (StarWars[i])
}



// SECTION 5
// All answers are in terminal_homwork.bash