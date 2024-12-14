//Dates will be calculated from 1 January 1970
 // it is calculated in milliseconds
 // Temporal is under progress to simplify the work

 let myDate = new Date()
 console.log(myDate)
 console.log(myDate.toString())
 console.log(myDate.toDateString())
 console.log(myDate.toISOString())
 console.log(myDate.toJSON())
 console.log(myDate.toLocaleDateString())
 console.log(typeof myDate);
 
 let myCreatedDate = new Date(2023,0,24)     //In JS month is started by 0
 console.log(myCreatedDate.toString());


 //mm-dd-yy
 let newDate = new Date("01-01-2024")
 console.log(newDate.toDateString());
 


 //timestamp
 let myTimeStamp = Date.now()
 console.log(myTimeStamp);
 console.log(myCreatedDate.getTime())

 //converting in seconds
 console.log(Math.floor(myTimeStamp/1000))

let newDate2 = new Date()
console.log(newDate2.getMonth()+1) // shows current month 


console.log(`Today's date is ${newDate2.getDate()} and time is ${newDate2.getTime()}`)


//customisation
newDate2.toLocaleString('default',{
    weekday: "long"
})