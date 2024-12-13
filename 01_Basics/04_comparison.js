console.log("2">1);     // always see datatypes are equal
 

// this type of comparison writing is not recommended but atleast you have to go through it

console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(null<=0);


//note => important to learn about it before intervuew
// The reason is that equality check == and comparisons > < >= <= wor differently
//Comparisons convert null to a number treating it as 0
// thats why (3) null>=0 is true and (1) null >0 is false

// === this means it strictly checks i.e it also checks it data type
console.log("2"===2)
console.log(2===2)