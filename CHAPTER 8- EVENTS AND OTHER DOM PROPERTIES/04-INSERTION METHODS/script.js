// this is a classicaly way to insert text or element inside the html

// let a=document.getElementsByTagName("div")[0]
// a.innerHTML=a.innerHTML+" <h1>this is shahab saeed</h1>"

// let b=document.getElementsByTagName("div")[1]
// b.innerHTML=b.innerHTML+" <h1>this is shahab saeed 2</h1>"

// let c=document.getElementsByTagName("p")[0]
// c.innerHTML=c.innerHTML+" <h1>this is shahab saeed 3</h1>"

// let d=document.getElementsByTagName("p")[1]
// d.innerHTML=d.innerHTML+" <h1>this is shahab saeed 4</h1>"



// there is a modified way to insert elements in the browser by creating a variable:-

// let a=document.body.getElementsByTagName("div")[0]
// let b=document.createElement("h1")
// b.innerHTML=" this is shahab saeed"
// a.append(b)


// let a=document.body.getElementsByTagName("p")[0]
// let b=document.createElement("h1")
// b.innerHTML=" this is shahab saeed in Para 1"
// a.append(b)


// let a=document.body.getElementsByTagName("p")[1]
// let b=document.createElement("h1")
// b.innerHTML=" this is shahab saeed in Para 2"
// a.append(b)



// let a=document.body.getElementsByTagName("p")[1]

// for(let i=0; i<=5;i++){
//      let b=document.createElement("h1")
//      b.innerHTML=` this is shahab saeed in Para ${i}`
//      a.append(b)
// }


// APPEND METHOD:-

// a.append(div) // this will add in the last of the cobtainer


// PREPEND METHOD:-

// a.prepend(div) // this will add on the first in the container

// BEFORE METHOD:-

// a.before(div) // put the inserted element outside the selected element on the first

// AFTER METHOD:-

// a.after(div) // put the inserted element outside the selected element on the last

// REPLACE METHOD:-

// we cam replace any attribute to the selected attribute

// a.replaceWith(div)// this will put only div in the browser

// let a=document.body.getElementsByTagName("div")[0]
// let b=document.createElement("h1")
// b.innerHTML=" <h1>this is shahab saeed</h1>"
// a.after(b)

// a.replaceWith(b)
