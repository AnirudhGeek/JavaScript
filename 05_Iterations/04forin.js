const myObj = {
    js: 'javascript',
    cpp:"c++",
    rb : "ruby",
    swift: "Swift by apple"
}

//forin loop  -> most suitable for objects
for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}

const map = new Map()
map.set("IN","India")
map.set("US","United states of America")
map.set("FR","France")
map.set("IN","India")
for (const key in map) {
    console.log(key)
}