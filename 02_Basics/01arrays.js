//Arrays-> arrays in js is resizeable and can contain a mix of different data types 
//js array-copy operations create shallow copies 
//Shallow copies-> copy of an object is a copy whose properties share the same reference 
//Deep copies-> copy of an object whose properties do not share the same reference 

let myArr1 = [0,1,2,3,4]
let myArr2 = new Array(1,2,3,4)   //both are the correct way to declare an array
console.log(myArr1[0]);
console.log(myArr2[0]);


//Arrays Methods 
myArr1.push(5)
console.log(myArr1)

myArr1.pop()
console.log(myArr1)

myArr2.unshift(0)    // it puts the given element in the starting 
console.log(myArr2)

myArr2.shift()  //It removes the first element 
console.log(myArr2);


console.log(myArr1.includes(9))    // checks the gives element is there or not and gives the answer in true or false
console.log(myArr2.indexOf(3))    //if element is there it gives there index or else they will give -1


myArr1 = myArr2.join()    //it joins the two array and convert it in the string
console.log(myArr1)
console.log(typeof myArr1)



//slice ,splice
// slice doesnt manupulate the original array 
// splice manupulat ethe original array and also it includes range also 

console.log("A ", myArr2);
const myn1 = myArr2.slice(1,3)
console.log(myn1)
console.log("B ",myArr2)

const myn2 = myArr2.splice(1,3)
console.log(myn2)
console.log("C ", myArr2)