let p1=new Promise((resolve, reject)=>{
     setTimeout(() => {
          console.log("Learning")
          resolve("Resolving")
     }, 2000);
});

// here we can add multiple handlers of the promise using .then
// NOTE:-
          // there is a huge difference between cain handling and multiple handlers
p1.then(()=>{
     console.log("this is the p1")
})
p1.then(()=>{
     console.log("This is P2")
})

// if we change the oder then the first one will comes first and so on....

p1.then(()=>{
     console.log("This is P2")
})
p1.then(()=>{
     console.log("this is the p1")
})
