for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        console.log(`${element} is best number`)
    }
    console.log(element)
}
for (let i = 0; i < 10; i++) {
    console.log(`Outer Loop value: ${i}`)
    for(let j =0;j<10;j++){
        console.log(`When inner loop = ${j} then outer loop =${i}`)
    }
}



//break and continue
//break = it tooks out us from the whole loop 
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        break 
        
    }
    console.log(`Value of i is ${index}`);
    
    
}

//continue = it ignores for the first time
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue 
        
    }
    console.log(`Value of i is ${index}`);
    
    
}