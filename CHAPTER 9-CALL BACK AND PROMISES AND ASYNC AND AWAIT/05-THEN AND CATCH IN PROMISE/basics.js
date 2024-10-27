// we cxan also raise an error like this
// let a=new Error("this is an erroe")


let p=new Promise(function (resolve,reject){
     console.log("In Promise.....")
     setTimeout(() => {
          console.log("Set Time Out in 3 seconds")     
     }, 3000);
     console.log("End of the execution")
     resolve(true) 
     reject("rejected")
})

// console.log(p)


// we can get  the value of resolve by using value
// p.then(function(value){
//      console.log(value)
// })

// we can not get the value of reject like the above method


// similarly we can also handle the error like this:-

// p.catch(function(error){
//      console.log("Catching an error")
// })


// we can also use catch in then and then in catch if there is possiibility of an error

// for example:- we are fetching data from the serve
//  and by an way we lost the data then we might have to use the error


p.then(function(value){
     console.log(value)
}, function(Error){
     console.log("There is an error")
})