let newArr = require("./moduleEx");

let args = process.argv.slice(2);
let output = [];
for(let i = 0; i < args.length; i++){
    let element = Number(args[i]);
    output = newArr.putInList(element);
}
newArr.sortIt(output);
console.log(output);
