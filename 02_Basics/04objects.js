const tinderUser = new Object()    // singletopn object 
//const tinderUser = {}    //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 

// console.log(tinderUser)

const regularUser = {
    email : "some@gmial.com",
    fullname: {
        userfullname : {
            firstname : "Anirudh",
            lastname : "Raturi"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 ={
    3 : "a",
    4 : "b"
}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

const obj4 = {...obj1, ...obj2}   // we will use this mostly
console.log(obj4);


//arrays of objects
const users = [
    {
        id : 1,
        email : "anirudh@gmail.com"
    },
    {
        id : 1,
        email : "anirudh@gmail.com"
    },
    {
        id : 1,
        email : "anirudh@gmail.com"
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));