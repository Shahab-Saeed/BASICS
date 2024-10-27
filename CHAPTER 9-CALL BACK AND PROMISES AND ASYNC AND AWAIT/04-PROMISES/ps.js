// we cxan also raise an error like this
// let a=new Error("this is an erroe")


let p=new Promise(function (resolve,reject){
     console.log("In Promise.....")
     setTimeout(() => {
          console.log("Set Time Out in 3 seconds")
          resolve(true) 
          // reject("rejected")
          
     }, 3000);
     console.log("End of the execution")
     // resolve(true) 
     // reject("rejected")
})

console.log(p)
console.log(a)