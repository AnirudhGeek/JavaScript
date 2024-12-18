//reduce js
const myNums =[1,2,3]

//using function
const myTotal1 = myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and current value:${currval}`);
    return acc + currval
},0)

console.log(myTotal1);


const myTotal2 = myNums.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal2);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 4999
    },
    {
        itemName : "java course",
        price : 5999
    }
]

const priceToBuy = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(priceToBuy);