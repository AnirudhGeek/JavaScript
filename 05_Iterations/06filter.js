// for each is not used for returning 
// thats wyh we use filter 

const myNums = [1,2,3,4,5,,6,7,8,9,10]
const newNums = myNums.filter((num) => num>4)
console.log(newNums)      //[ 5, 6, 7, 8, 9, 10 ]

const new2Nums = myNums.filter((num) => {
    return num>4
})
console.log(new2Nums)


// by using foreach 
const new3Nums = []
myNums.forEach((num) => {
    if(num>4){
        new3Nums.push(num)
    }
})
console.log(new3Nums)

//Books acceewssing exercise 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk) => bk.genre === "History")
console.log(userBooks)

userBooks = books.filter((bk) => {
    return bk.publish>=1985 && bk.genre ==="Non-Fiction"
})
console.log(userBooks)
