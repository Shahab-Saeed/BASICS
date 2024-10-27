// try{
//      console.log(rahul)
// }
// catch(error){
//      console.log(error.name) // this will tells us the name of an error (e.g refrence )
//      console.log(error.message) // this will gives us te reason that what is the error
     //    console.log(error.stack) // this will gives us the complete error
// }



// we can also throw the custom errors

try{
     console.log(harry)
     throw new ReferenceError("harry is not given with value")
}
catch(error){
     console.log(error.name)
     console.log(error.message)
     console.log(error.stack)
}