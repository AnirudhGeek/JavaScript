let score ="33abc"
console.log(typeof score);
console.log(typeof (score));

let valueInNumbder = Number(score)
console.log(typeof valueInNumbder);
console.log(valueInNumbder);     // NaN

// "33" => 33
//"33abc" => NaN
// true => 1; false => 0


let isLogged = 1
let booleanIsLoggedIn = Boolean(isLogged)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn)

// 1=> true; 0=> false
// ""=> false 
// "anirudh" => true 


let someNumber =33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)




// ********** OPERATIONS **********

let value =5
let negValue = -value
// console.log(negValue);  //-5

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);     // power
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = " Anirudh"
let str3 = str1 + str2
console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");  //this type of writing code is not considered as good code 

console.log(true)
console.log(+true)   //1
console.log(+"")    //0


let num1,num2,num3
num1=num2=num3=2+2     // it is also not a good type to declare


let gameCounter =100
gameCounter++;
console.log(gameCounter)    // learn about prefix and postfix  ++gameCounter and gameCounter++