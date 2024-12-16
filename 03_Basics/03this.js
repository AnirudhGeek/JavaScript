//Here, this is use to refer the current conteext 
const user ={
    username : "Anirudh",
    price : 99,

    welcome : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}

user.welcome()
user.username = "sam"
user.welcome()

console.log(this);   // here, this refers to empty object because it is in node environment 


function one(){
    let username = "Anirudh"
    console.log(this)
    console.log(this.username)
}
one()


//**********arrow functions ******//
let addTwonum = (num1,num2) => {
    return num1+num2
}
addTwonum()


//const addTwonum = (num1,num2) => return num1 +num2    //implicit

//also if we remove want to remove return then we can add round arenthsis
// const addTwonum = (num1,num2) => (num1 + num2)


//returning objects
//const addTwonum = (num1,num2) => ({username : "Anirudh"})