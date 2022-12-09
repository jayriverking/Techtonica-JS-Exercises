// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
do{
    console.log(i);
    i++;
 }while(i <= 5)


// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for(let i = 1; i <= 5; i++){
    console.log(i);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let j = 10;

while(j >= 1){
    console.log(j);
    j--;
}

do{
    console.log(j);
    j--;
}while(j >= 1)

for(let j = 10; j >= 1; j--){
    console.log(j);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let k = 7;

while (k < 28){
    console.log(k);
    k++;
}

do{
    console.log(k);
    k++;
}while(k <= 27)

for(let k = 7; k <= 27; k++){
    console.log(k);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.


let l = 0;

while(l < 101){
    console.log(l);
    l += 10;
}

do{
    console.log(l);
    l += 10;
}while(l < 101)


for(let l = 0; l <= 100; l += 10){
    console.log(l);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

/* It runs forever because counterFour function Decrements the counter, 
and the counter variable will forever be smaller than the termination condition of 2 */

let counterFour = 1;
while (counterFour > -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let favInteger = 25;
for(let i = 0; i <= favInteger; i++){
    console.log(i);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let secondInt = 62;
for(let i = 0; i <= 100; i++){
    if(i === secondInt){
        console.log(`${i} is my favorite number!`);
    }
    else {
        console.log(`${i} is not my favorite number`);
    }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

/* Do-While loops will run at least once, 
so if I want my loops to run at least once a do-while loop will be useful.
For loops are useful for iterating through each element in an array, and While loops are
useful for randomized situations like picking a random card until the random card is a Joker */

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
    console.log("counting down from", outsideCounter);
    
    for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
      
  console.log("inside " + insideCounter);
    }
    console.log("*******************");
  }
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
/* Exercise 11's termination condition was kind of confusing but thinking it of a
"while" conditon always helps for me - I wanted this loop to run "while" [the inside counter is 
bigger than 0] and now it works as intended. */

// Email your file to us or commit your file to GitHub and email us a link.