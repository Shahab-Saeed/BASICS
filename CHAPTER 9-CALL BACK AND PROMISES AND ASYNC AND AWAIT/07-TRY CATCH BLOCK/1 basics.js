// try catch block is most important for handling the errors
// /if the code written insode the try would not work then the code written inside catch will work

// /NOTE:-
     // if you write scheduled function or code (e.g settimeout) this wont word
     // only the synchronized code will work inside the try catch block


// we will use it inside the bom


// try{
//      let name="shahab saeed"
//      let age=20
//      console.log(nameis)// this will gives an error so the cpode inside the catch will be executed
// }
// catch(error){ // here instead of an error you can write any thing but not recommendavble
//      let name="shahab saeed"
//      let age=20
//      console.log(`"${name}" is "${age}" years old`)
//      console.log(error)
// }


// try{
//      setTimeout(() => {
//           console.log(rahul)
//      }, 2000);

//      // this will gives an error as try catch does not work with scheduled/ asynchronized code
// }
// catch(shahab){
//      console.log(shahab)
// }

