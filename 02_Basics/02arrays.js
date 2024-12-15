const marvel = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

//Push -> it is pushed directly on the same array 
// marvel.push(dc)      //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel)
// console.log(marvel[3][1])  ///this is not a good way to represent the element 



// //Concat array -> it requires another variable to return its output 
// const allHeroes = marvel.concat(dc)     //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeroes);


const allNewHeroes = [...marvel , ...dc]
console.log(allNewHeroes);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);



console.log(Array.isArray("Anirudh"))
console.log(Array.from("Anirudh"))

console.log(Array.from({name:"Anirudh"}))   //Interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 ,score3))