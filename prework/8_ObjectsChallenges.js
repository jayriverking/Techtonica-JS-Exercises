// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!

    const keys = (obj) => {
        let keyArr = [];
        for (let key in obj){
            //obj[key] will give the value - to ge the key, see below code!
            keyArr.push(key)
        }
        return keyArr;
    }

// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// console.log(keys(obj)); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// console.log(keys(obj2)); // ["first", "last"]
// let obj3 = {};
// console.log(keys(obj3)); // []


// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!

const values = (obj) => {
    let valArr = [];
    for(let key in obj){
        valArr.push(obj[key]);
    }
    return valArr;
}


// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// console.log(values(obj)); // [1,2,3]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// console.log(values(obj2)); // ["Matt", "Lane", true]
// let obj3 = {};
// console.log(values(obj3)); // []

// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!

const entries = (obj) => {
    let parentArr = [];
    for(let key in obj){
        parentArr.push([key, obj[key]]);
    }
    return parentArr;
}


// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// console.log(entries(obj));
// // [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// console.log(entries(obj2));
// // [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// console.log(entries(obj3)); // []

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

const pluck = (arrObj, keyName) => {
    let valArr = [];
    for(let i = 0; i < arrObj.length; i++){
   for(let key in arrObj[i]){
    if(key == keyName){
        valArr.push(arrObj[i][key]);
    }
    else{
        valArr.push(undefined);
    }
   }}
    return valArr;
    
}

// // Examples:
// console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name'));
// // ["Tim", "Matt", "Elie"]
// console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner'));
// // [true, false, undefined] --> [ undefined, true, undefined, false, undefined ] is returned because this function cannot differentiate keys

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.

const stringFromObject = (obj) => {
    let objStr = "";
    //use for in loop
    for(let key in obj){
        objStr += `${key} = ${obj[key]}, `
    }
    //remove the last comma from the string - remember that it's -2 (not -1) because there's a space after the comma!
    return objStr.slice(0, -2);

}

// Examples:
// console.log(stringFromObject({ a: 1, b: '2' }));
// // "a = 1, b = 2"
// console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }));
// // "name = Elie, job = Instructor, isCatOwner = false"
// console.log(stringFromObject({})); // ""

// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]

const minMaxKeyInObject = (obj) => {
    let arr = [];
    let minimum = 10000;
    let maximum = -1;
    for(let key in obj){
        //keys can only be string, but adding a + sign will convert them to numbers 
        //- that's what I'm doing here in order to compare the numerical values of the keys
        let keyNum = +key;

        if(keyNum > maximum){
            maximum = key;
        }
        if(keyNum < minimum){
            minimum = key;
        }
        // console.log(maximum, key);
        // console.log(maximum);
       
    }
    arr.push(minimum, maximum);
    return arr;
}

// Examples:
console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
// [1, 10] == this gives me 7.. why?
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));
// [1, 4]


