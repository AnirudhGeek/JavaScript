// singleton -> constructor method -> Object.create


//object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Anirudh",   // in the format key : value
    "full name": "Anirudh Raturi",    //this cant be acced by using dot method thats why we choose sqaure method in place of dot method
    [mySym] : "mykey1",    //declaration of a symbol inside an object
    age : 20,
    location : "Rishikesh",
    email : "anirudhabc@gmial.com",
    isLoggedIn : false,
   lastLoggedIn : ["Monday","Saturday"]   
} 

console.log(jsUser.email); //it is not an appropriate way 
console.log(jsUser["email"]);  // this is the correct way to use 
console.log(jsUser[mySym]);   // this is how symbol inside an object is accessed 

jsUser.email = "anirudh@chatgpt.com"

// Object.freeze(jsUser)   // any further changes on the object are not allowed 
// jsUser.email = "anirudh@microsoft.com"
console.log(jsUser);


//adding functions in object

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting)    // [Function (anonymous)]
console.log(jsUser.greeting())  // Hello JS user
console.log(jsUser.greetingTwo());   //Hello JS user, Anirudh
