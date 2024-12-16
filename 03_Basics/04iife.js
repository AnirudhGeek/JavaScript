// Immediately invoked Function Expression (IIFE)

// we use this because many a times there are problem because of global pollotion,so to remove the pollotion occuring from that iife is used
 
//name iife
(function cl(name){
    console.log(`Hey ${name}`)
})("friend");

//simple iife
((name) => {
    console.log(`DB CONNECTED ${name}`)
})("Anirudh");        //semicolon is must