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