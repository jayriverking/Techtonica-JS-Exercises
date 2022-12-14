// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.


const prependToString = (str1, str2) => {
    //return a new string that is a concatenation of str2 and str1
    let newStr = str2 + str1;
    return newStr;
}
// Examples:
console.log(prependToString('awesome', 'very')); // --> 'veryawesome'
console.log(prependToString('world', 'hello ')); // --> 'hello world'
console.log(prependToString('nothing', '')); // --> 'nothing'

// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!

const stringIncludes = (str, char) => {
    //loop thorugh string to find char
    for(let i = 0; i < str.length; i++){
        //if the string's character at index is equal to char, return true
        if(str[i] === char){
            return true
        }
    }
    //else return false
    return false;
}

// Examples:
console.log(stringIncludes('awesome', 'e')); // --> true
console.log(stringIncludes('awesome', 'z')); // --> false

// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
// The function should return the last index at which the character exists or -1 if the character is not found.
// IMPORTANT: Do not use the built in "string".lastIndexOf() function!

const stringLastIndexOf = (str, char) => {
    //find last index of the character in a string = or the first index of the char while going backwards = (decrement for loop);
    // if I go backwards through the string, I can just return the first instance of the char;
    //i = string length, while i is bigger than -1 because index begins at 0, and decrement i
    for(let i = str.length - 1; i > -1; i--){
        if(str[i] === char){
            return i;
        }
    }
    //else return -1
    return -1;
}

//Examples:

console.log(stringLastIndexOf('awesome', 'e')); // --> 6
console.log(stringLastIndexOf('awesome', 'z')); // --> -1

// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
// The function should return a new string with the characters removed.

function removeFromString(str, index, remove){

    //had to google - it works and I kind of get how it works...
    //this part I was able to figure out on my own - extracting from str[0] to str[index]
    let newStr = str.slice(0, index);

    //this is where things get a bit tricky for me... w3 says slice() extracts a part of a string and returns the extracted part
    //but why am I to add index and remove?? ok maybe I get it now:

    //the answer is: this part removes x amount of characters from the beginning of the string...like split(1) removes the first character
    //from the beginning of the string. so removing the "remove" amount removes that much from the beginning of the string 
    //+ removing the "index" amount removes the "index" amount from the beginning of the string, leaving the tail end of the string that didn't get removed
    //and then: to finish it up, we add the newStr (head part of the string, extracted) and str2 (tail end, extracted).
    let str2 = str.slice(index + remove);

    // console.log('new ' + newStr);
    // console.log('second ' + str2);
    return newStr + str2;
}

// Examples:
console.log(removeFromString('Elie', 2, 2)); // --> 'El'
console.log(removeFromString('Elie', 0, 1)); // --> 'lie'
console.log(removeFromString('Hello School', 0, 6)); // --> 'School'
console.log(removeFromString('Hello School', 2, 4)); // --> 'HeSchool'
console.log(removeFromString('Hello School', 6, 400)); // --> 'Hello '

// Exercise 5. Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// IMPORTANT: Do not use the built in array.indexOf() function!

function indexOf (arr, num){
    //go through array to find the number - using for loop
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }
    //if it doesn't exist, return -1
    return -1;
}

// Examples:
let arr = [5, 10, 15, 20];
console.log(indexOf(arr, 20)); // --> 3
let arr2 = [1, 2, 3, 4, 5];
console.log(indexOf(arr2, 2)); // --> 1
let arr3 = [1, 2];
console.log(indexOf(arr3, 10)); // --> -1



// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.
// The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.

function includes(collection, value, index = 0) {
  //check type of collection
   let type = typeof collection;
    //because typeof array was giving back 'object', I added a 
    //method to check if collection is an array
    let isArr = Array.isArray(collection);
    //if string or array - iterate through with a for loop
    if (type === 'string' || isArr) {
      //for loop - starting index = index
      for (let i = index; i < collection.length; i++) {
  
        if (collection[i] === value) {
          return true;
        }
      }
    }
  
    else if (type === 'object') {
      //using for in loop to iterate through object
      for (let item in collection) {
        if (collection[item] === value) {
          return true;
        }
      }
    }
    //otherwise return false
    return false;
  }
  
  // Examples:
  console.log(includes([1, 2, 3], 1)); // --> true
  console.log(includes([1, 2, 3], 1, 2)); // --> false 
  console.log(includes([1, 2, 3], 6)); // --> false
  console.log(includes({ 'a': 1, 'b': 2 }, 1)); // --> true
  console.log(includes({ 'a': 1, 'b': 2 }, 'a')); // --> false
  console.log(includes('abcd', 'b')); // --> true
  console.log(includes('abcd', 'e')); // --> false
  console.log(includes('abcd', 'a', 2)); // --> false