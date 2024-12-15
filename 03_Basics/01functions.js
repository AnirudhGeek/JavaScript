// function greet(){
//     console.log("Good Morning");
// }
// greet()

// function addTwoNumbers(num1,num2){    //here num1 and num2 are called parameters
//     console.log(num1+num2)
// }
// addTwoNumbers(4,3)     //here 3 and 4 are arguments
// addTwoNumbers(4,"5")
// addTwoNumbers(4,"a")
// addTwoNumbers(4,null)

// const result = addTwoNumbers(3,5)
// console.log("Result: ",result)   //here it will show undefined

function addTwoNumbers(num1,num2){    //here num1 and num2 are called parameters
    let result = num1+num2
    return result
    console.log(num1+num2)    //anything below return is unreachable code 
}

const result = addTwoNumbers(5,6)
console.log("Result: ",result)

function loginUserMessage(username = "Sam"){    //sets default value as Sam in place of undefined
    if(!username){
        console.log("Please Enter the username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Anirudh"))
console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600,2000))    //[ 200, 400, 600, 2000 ]

// function calculateCartPrice(val1,val2,...num1){     //here num1 will store only 600 and 200 because val1has stored 200 and val2 has stored 400
//     return num1
// }
// console.log(calculateCartPrice(200,400,600,2000))    //[ 600, 2000 ]


//passing object
const user = {
    username : "Anirudh",
    price : 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username : "ABC",
    price : 999
})


//passing array
const myNewArray = [2000, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([350 , 750 , 550 , 900]))