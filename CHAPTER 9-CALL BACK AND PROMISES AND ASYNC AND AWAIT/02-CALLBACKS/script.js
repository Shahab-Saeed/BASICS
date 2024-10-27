// call back basically means that we call the function into the argument of the other function

// mmaking the random function

// function hello(){
//      console.log("good Morning")
// }

// function names(){
//      let a=prompt("Enter your name: ")
//      console.log(a)
// }

// // here we have to give the argument  used as only (callback)
// function loadscript(src, callback){
//      let script=document.createElement("script");
//      script.src=src;
//      document.body.appendChild(script);
//      // here we also have to call the function
//      callback();     
        
// }

// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",  names, hello)

// function loadscript(src,callback){
//      let script=document.createElement("script");
//      script.src=src;
//      document.body.appendChild(script);
//      script.onload=function(){
//           callback(src)
//      }
//      script.onerror=function(){
//           console.log("SOME ERROR OCCURED: "+src)
//      }
// }

// function status1(src){
//      console.log("done with: script: "+src)
// }

// loadscript("https:://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", status1)



// function loadscript(src, callback){
//      let script=document.createElement("script");
//      script.src=src;
//      document.body.appendChild(script);
//      script.onload=function(){
//           callback()
//           console.log("your script is loaded: "+ src)
//      }
//      script.onerror=function(){
//           callback()
//           console.log("ERROR:- "+src)
//      }
// }

// function greet(){
//      let a=prompt("Enter Your Name: ");
//      console.log(a);
//      console.log("Dear! "+a);
// }

// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",greet)

// function loadscript(src, callback){
//      let script=document.createElement("script");
//      script.src=src;
//      document.body.appendChild(script);
//      script.onload=(function(){
//           callback(null);
//           console.log("Script is running "+ src)
//      })
//      script.onerror=(function(){
          
//           callback(new Error("Src is not found"));
//           console.log("error while loading script "+src)
//      })
// }


// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function hello(){
//      let a=prompt("Enter your name: ")
//      console.log(a)
//      console.log("Dear! ", a)
// })


