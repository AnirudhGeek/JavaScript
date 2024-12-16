// Truthy and Falsly values 


const userEmail= "Anni"

if(userEmail){
    console.log("Got user email")
}else{
    console.log("Dont have user email")
}

//falsy values
//fasle, 0 , -0 , BigInt 0n ,"", null,undefined , NaN


//truthy values
//"0" ,  'false' , " " , [] , {} , function(){} 


// checking of array is zero 
const emptyArr = []
if(emptyArr.length === 0){
    console.log("Array is Empty")
}else{
    console.log("Array is not empty");
}

//cheking of object is empty
const emptyObj = {}
if((Object.keys(emptyObj)).length===0){
    console.log("Object is Empty")
}else{
    console.log("Object is not empty")
}


//NUllish Coalescing Operator (??): null undefined
let val1
val1 = 5 ?? 10
console.log(val1)
val2 = null ?? 10
console.log(val2)

val3 =undefined ?? 15
console.log(val3)

val4 = null ?? 10 ?? 20
console.log(val4)


//terniary Operator
// cosndition ? true : false

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80") :console.log("more than 80") 