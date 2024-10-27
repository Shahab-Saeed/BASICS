// we use finally after catch
// the code written inside finally will always be executed


// Scenario 1:
          // if the code inside try will be executed then finally will also be executed
// try{
//      console.log("shahab saeed")
// }
// catch(error){
//      console.log("ERROR!!!!!")
// }
// finally{
//      console.log("This Is Finally!")
// }


// Scenario 2:
      // if the code inside catch will be  executed then finally will also be executed
// try{
//      console.log("shahab saeed")
//      console.log(s)
// }
// catch(error){
//      console.log("ERROR!!!!!")
// }
// finally{
//      console.log("This Is Finally!")
// }


// Scenario 3:
          // if the code inside try has an error and the code inside catch also have an error then if we write console.log(....) then it will not be executed
// try{
//      console.log("shahab saeed")
//      console.log(p)
// }
// catch(error){
//      console.log("ERROR!!!!!")
//      console.log(p)
// }
// console.log("Console.log")


// Scenario 4:
          // if the code inside try has an error and the code inside catch also have an error then if we use finally clause then it will always be executed
// try{
//      console.log("shahab saeed")
//      console.log(p)
// }
// catch(error){
//      console.log("ERROR!!!!!")
//      console.log(p)
// }
// finally{
//      console.log("FINALLY")
// }


// // Scenario 5:(inside the function)
//           // if the code inside try executes and we use return, even then finally will alwayus be executed

// const f=()=>{
//      try{
//           console.log("shahab saeed")
//           return
//      }
//      catch(error){
//           console.log("ERROR!!!!!")
//           console.log(p)
          
//      }
//      finally{
//           console.log("FINALLY")
//      }
// }
// f();

// // Scenario 6:(inside the function)
//           // if the code inside catch executes and we use return, even then finally will always be executed

// const f=()=>{
//      try{
//           console.log("shahab saeed")
//           console.log(p)
//           return
//      }
//      catch(error){
//           console.log("ERROR!!!!!")
//           return
          
//      }
//      finally{
//           console.log("FINALLY")
//      }
// }
// f();



// Scenario 7:(inside the function)
          // if we do not write finally clause inside the function and instead we use console.log, then the statement inside the console.log will never executes

          // const f=()=>{
          //      try{
          //           console.log("shahab saeed")
          //           console.log(p)
          //           return
          //      }
          //      catch(error){
          //           console.log("ERROR!!!!!")
          //           return
                    
          //      }

          //           console.log("FINALLY")
          
          // }
          // f();


// Scenario 8:(inside the function)
          // if we do write finally clause inside the function then the statement inside the finally will always be executed

          // const f=()=>{
          //      try{
          //           console.log("shahab saeed")
          //           console.log(p)
          //           return
          //      }
          //      catch(error){
          //           console.log("ERROR!!!!!")
          //           return
                    
          //      }
          //      finally{
          //           console.log("FINALLY")
          //      }
          // }
          // f();


// Scenario 9:-
          // we cannot use break inside the try catcj and finally