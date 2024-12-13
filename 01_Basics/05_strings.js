const name ="Anirudh"
const repoCount = 50

//Older way of writhing synatax
console.log("Hello my name is " + name + " and my repo count is " + repoCount);


//Modern way => called as string intercollision
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Anirudh-Ra')
console.log(gameName[0]);
console.log(gameName.__proto__);   // how prototype can be accessed 


console.log(gameName.length)    // it gives the length
console.log(gameName.toUpperCase())   //Original value is not changed
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName(-8,4)
console.log(anotherString);

const newStringOne = "     anirudh     "
console.log(newStringOne);
console.log(newStringOne.trim());     // removes starting and ending empty spaces in between

//replace
//includes
//split
// Please go through with the MDN docs for reading the documentation