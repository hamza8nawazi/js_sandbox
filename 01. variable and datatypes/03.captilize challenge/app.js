let myString = 'developer';

// Solution 1
let myNewString1 = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2 (Uses string[0] instead of string.charAt(0))
let myNewString2 = myString[0].toUpperCase() + myString.substring(1);

// Solution 3 (Uses template literal and slice())
let myNewString3 = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString1);
console.log(myNewString2);
console.log(myNewString3);