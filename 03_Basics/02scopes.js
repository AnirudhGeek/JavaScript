// {}    whenever this comes in a function ,if else etc accept objects , then it called scope
// in case of object it is called it si for object declaration


// INTERVIEW => scope in browser environment is different compared to code environment running on node 


if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ",a);
}

// console.log(a);     //this will thruogh an error
// console.log(b);    //this will through an error 
console.log(c);


function one(){
    const username = "Anirudh"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}
one()



//********interesting ************
console.log(addone(5))
function addone(num){
    return num + 1
}


//Hosting problem 
//   addtwo(5)   but this will through an error 
const addtwo = function(num){
    return num+2
}
console.log(addtwo(5))