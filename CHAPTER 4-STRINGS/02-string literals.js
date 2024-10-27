let name="shahab saeed"
let friendname="hamza bhatte"

let sentence1=`name has a best friend friendname` // this will print simply as written
// if we want tro put the values in place of variables in a string we can do it by:


// it will only works inside backtick
let sentence2=`${name} has a bestfriend "${friendname}"`
console.log(sentence2)

// this would not work in double and single inverted commas

// EXAMPLE:-

let name1="shahab saeed";
let name2="Aatika zaman khan";
let age=20;
let school="FFMS";
let college="GDCMCK";
console.log(`${name1} and ${name2}  have studied in same school "${school}" and in same college "${college}" and there ages are totally same i.e. "${age} years old"`)


// let name="Shahab saeed";
// let age=20;
// let school="FFMS";
// let college="GDCMCK";
// let profession="ARMY " + "Software Engineer";
// let uni="Karachi University";
// let dept="UBIT(Umer Basha Institute Of Technology)";
// let field="Software Engineering";
// console.log(`"My Name is:  "${name}"`)
// console.log(`I am "${age} years old."`)
// console.log(`I have Studied In "${school} School"`)
// console.log(`"i have done my intermediate from "${college} College"`)
// console.log(`I have Two Professions which i will follow Inshaallah, these are "${profession}"`)
// console.log(`Right now i am doing my BS in "${field}" from"${uni}" Department of "${dept}"`)

// let name="Aatika zaman Khan";
// let age=20;
// let school="FFMS";
// let college="GDCMCK";
// let profession="Micro Biologist";
// let uni="Karachi University";
// let dept="Micro Biology";
// let field="Micro Biology";
// console.log(`"My Name is:  "${name}"`)
// console.log(`I am "${age} years old."`)
// console.log(`I have Studied In "${school} School"`)
// console.log(`"i have done my intermediate from "${college} College"`)
// console.log(`I have Two Professions which i will follow Inshaallah, these are "${profession}"`)
// console.log(`Right now i am doing my BS in "${field}" from"${uni}" Department of "${dept}" `)
