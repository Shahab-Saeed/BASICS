// Adding the event listener

// let btn=document.body.getElementsByTagName("button")[0];
// btn.addEventListener("click",function(e){
//     console.log("1-->Hello World!")
// })

// btn.addEventListener("click",function(e){
//     console.log("2--> Hello World!")
// })


// ADVANCED WAY:-

// /First making The Functions:-
let x= function() {
    alert("1--> HELLO WORLD!")
}

let y=function(){
    alert("2--> HELLO WORLD!")
}

let z=function(){
    console.log("DONE!")
}

let mouseover=function(e){
    console.log("MOUSE OVER!!!!!!")
}

let mouseenter=function(e){
    console.log("MOUSE ENTER!!!!!!")
}

let mouseleave=function(e){
    console.log("MOUSE LEAVING!!!!!!")
}


// Adding The Event Listener
let btn=document.body.getElementsByTagName("button")[0];

btn.addEventListener("click",x)
btn.addEventListener("click",y)
btn.addEventListener("click",z)
btn.addEventListener("mouseover",mouseover)
btn.addEventListener("mouseenter",mouseenter)
btn.addEventListener("mouseleave",mouseleave)




// REMOVING THE EVENT LISTENER
// let a=prompt("Enter your Favourite Number: ")
// if (a=="1"){
//     btn.removeEventListener('click',y)
// }
// if (a=="2"){
//     btn.removeEventListener('click',x)
// }


