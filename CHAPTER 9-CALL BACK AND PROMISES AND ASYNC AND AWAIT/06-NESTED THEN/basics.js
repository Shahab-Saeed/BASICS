let p1=new Promise((resolve, reject)=>{
     setTimeout(() => {
          console.log("this is p1")
          resolve("p1 resolving")
     }, 2000);
     
})
p1.then((value)=>{
     console.log(value)
     let p2=new Promise((resolve, reject)=>{
          setTimeout(() => {
               console.log("this is p2")
               resolve("p2 resolve")
          }, 2000);
          
     })
     return p2
}).then((value)=>{
     console.log(value)
     return 2
}).then((value)=>{
     console.log(value)
})