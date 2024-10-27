// creating an array:-

// you can add every type of value in any array
let every=["shahab",20,"b+",true,null,30.6]

// you can also add new values to an array:-

every[6]="new value"

// you can also change the existing value in an array:-

every[0]="aatika zaman khan"

// printing the entire array:-

console.log(every)

// printing the type of an array(all arrays are of object types):-

console.log(typeof every)

// printing the items of the array via indexing:-

console.log(every[0])
console.log(every[1])
console.log(every[2])
console.log(every[3])
console.log(every[4])
console.log(every[5])
console.log(every[6])
// if we add index out of range then it will display undefined

// we can find the length of the array by using length method:-

console.log(every.length)


// QUICK QUIZ:-
// printing the array with for loop:-

for(i=0;i<=every.length;i++){
    console.log(every[i])
}
