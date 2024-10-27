// syncronous actions are thore actions that initiate and finish one by one

let a=9;
let b=6;
let c=7;
console.log(a+b+c);

// EXAMPLE:-
let name="shahab saeed";
let age=20;
let school="FFMS";
console.log(`my name is "${name}"\nI am "${age}" years old and i have done my matriculation fron "${school}"`)

// asyncronous actions are those actions that we initiate now and they finish later

console.log("start");
setTimeout(function(){
    console.log("shahab saeed")
},5000);
console.log("end");
console.log("shahab2")


// EXAMPLE:-

console.log("start")
setTimeout(() => {
     console.log("this will rubn after 3 seconds")
}, 3000);
console.log("End")
let name1="shahab saeed";
let age1=20;
let school1="FFMS";
console.log(`my name is "${name1}"\nI am "${age1}" years old and i have done my matriculation fron "${school1}"`)

