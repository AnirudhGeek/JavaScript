const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)    // it converts it to string and then we can calculate the length of the string  
console.log(balance.toFixed(2))    // used for presicion it is specillay used in the ecomerce website thing

const otherNumber = 234.47836
console.log(otherNumber.toPrecision(4));

const hundreds =10000000
console.log(hundreds.toLocaleString('en-IN'))      // converts the value in indian counting standard default value is US counting system 



// *****************   MATHS    ***************

console.log(Math);
console.log(Math.abs(-4))    // It converts -ve values to positive but positive remains to positive only
console.log(Math.round(4.6));   // it round offs
console.log(Math.ceil(4.2))  // it round offs in upper value
console.log(Math.floor(4.9))   // floor value

// calculating max and min values 
console.log(Math.max(4,3,6,8));
console.log(Math.min(4,3,6,8));

console.log(Math.random());  //value always lies between 0 and 1
console.log(Math.random());  //value always lies between 0 and 1

console.log((Math.random() * 10) + 1)      // it confirms that hte value will always starts from 1
console.log(Math.floor(Math.random() * 10) +1)     // it confirm that the value is in natural number

const min = 1
const max = 6
console.log(Math.floor(Math.random()* (max-min+1))+min)