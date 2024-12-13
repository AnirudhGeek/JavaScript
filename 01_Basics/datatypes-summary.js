// there are 2 types of datatypes i.r primitive and non primitiive 

// #1 PRIMITIVE : they all are call by value
// 7types: String, Number, Boolean, null , undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);


const bigNUmber = 23324746245455236n    // when we put n after a number it becomes a BigInt number 



// Is javascript staically typed language or dynamically typed language 
//JavaScript is dynamically typed, which means that type checking is done at runtime, rather than compile time



// #2 NON PRIMITIVE : reference type
// Array, Objects , Functions

const fruits = ["Apple","Mango","Banana"]   // eg of an array

// objects are written in curly brackets
let myObj = {
    name: "Anirudh",
    age: 22,
}

//functions(){}
const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNUmber);
// REMINDER: learn type of from ECMAScrpit documentation
console.log(typeof null);


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object