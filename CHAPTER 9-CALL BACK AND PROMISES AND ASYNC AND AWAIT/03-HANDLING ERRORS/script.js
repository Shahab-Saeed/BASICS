// function loadscript(src, callback){
//      let script=document.createElement("script");
//      script.src=src;
//      document.body.appendChild(script);
//      script.onload=(function(){
//           callback();
//           console.log("Script is running "+ src)
//      })
//      script.onerror=(function(){
//           callback();
//           console.log("error while loading script "+src)
//      })
// }

// function hello(){
//      console.log("HEllooooo")
// }

// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)


// we can also handle the error like this:-

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

// function hello(error){
//      console.log("HEllooooo"+error)
// }

// loadscript("https://cdn.jsdelivr.enter.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)


// we can also handle the error like this:-


// function loadscript(src, callback){
//      let script=document.createElement("script");
//      script.src=src;
//      document.body.appendChild(script);
//      script.onload=(function(){
//           callback(null);
//           console.log("Script is running "+ src)
//      })
//      script.onerror=(function(){
//           callback(new Error("problem with script"));
//           console.log("error while loading script "+src)
//      })
// }

// function hello(error){
//      console.log("HEllooooo"+ error)
// }

// loadscript("https://cdn.jsdelivr.enter.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)