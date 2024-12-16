// while and do while 


let index = 0;
while (index<=10) {
    console.log(`Value of indec is ${index}`)
    index = index +2
}

let myArr = ["flash","batman","superman"]
let arr =0
while(arr<=myArr.length){
    console.log(`Value is ${myArr[arr]}`)
    arr++
}


//do-while = minimum runs for the one time

let score =0
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);