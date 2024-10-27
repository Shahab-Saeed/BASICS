// Promise is basically use for the parallel execution
// in promise the promise of executing the code will always be fulfilled
// the promise will be fulfilled in two ways:
// either resolve or reject

// making of the promise
let p=new Promise(function(resolve,reject){
     console.log("ALERT!!!!!")
     // if we write resolve here and we give any random value then the promise would be resolve
     // here in resolve you can give anything inside the resolve whether it is an array, string , any value.
     // resolve()
     

     // if we wirte reject here then it will gives an error
     // reject("not applicable")
     // reject(23);
     
})
console.log("Hello!")
console.log("this is shahab saeed")
console.log("How are you doing today")

// printing the resolve using promise's object
console.log(p)


// using resolve and reject in the BOM