// forof  -> directly gives us the value 
//        -> more suitable for arrays    

const arr = [ 1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


//Maps -> No duplicate values are here only the unique values are here only

const map = new Map()
map.set("IN","India")
map.set("US","United states of America")
map.set("FR","France")
map.set("IN","India")

console.log(map)

for (const [key,value] of map) {
    console.log(key, ":-" , value);
    
}



//object
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,values] of myObject) {         // This will through an error 
//     console.log(key, ":-", values)
// }  