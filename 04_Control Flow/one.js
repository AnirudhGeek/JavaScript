// If

const isUserLoggedIn = true

if(isUserLoggedIn){

}

// < //less than
// >  //greater than 
// <= //less than ewauls to 
// >= //greater than ewauls to 
// = //asignment operator
// == // check if euals
// != // not equals to 
// === // it also checks the type 
if(2=="2"){
    console.log("Executed");
}
if(2==="2"){
    console.log("Executed");
}

const temperature =41
if(temperature<50){
    console.log("temperature is less than 50");
}else{
    console.log("temperature is greater than 50");
}



//short hand notation
const balance =1000
if (balance>500) console.log("test")

if(balance < 500){
    console.logg("less than")
}else if (balance <750){
    console.log("less than 750");
}else{
    console.log("Less than 1200")
}


const debitCard =true
const loggedInFromGoogle =false 
const loggedInFromEmail = true 
if(isUserLoggedIn && debitCard ){
    console.log("Allow user to buy the course ")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}