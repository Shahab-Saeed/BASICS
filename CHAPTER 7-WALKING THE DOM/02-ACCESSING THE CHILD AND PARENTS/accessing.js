// ACCESSING THE CHILDREN:-


// accessing the first child of the body
// console.log(document.body.firstChild)

// accessing the last child of the body
// console.log(document.body.lastChild)

// accessing all the direct-child of the body
// console.log(document.childNodes)

// childNodes are not like an array
// but we can convert into arrays to apply arrays methods
// let arr=Array.from(document.body.childNodes)
// console.log(arr)


// We can also access the child like this:-
// document.body.childnodes[0]
// document.body.childnodes[1]
// document.body.childnodes[2]
// .
// .
// .

// OR:

// console.log(document.body.childNodes[1])
// .
// .
// .




// ACCESSING THE SIBILINGS:-

// we can simplyt access the sibilings by selecting them and further ahead we write .nextsibiling
// $0.nextsibling
// $0.previoussibling


// ACCESSING THE PARENTS:-

// a=document.body.firstChild
// console.log(a.parentElement)  // returns null if no any parent element like(h,p .... and so on) is not present
// console.log(a.parentNode)   // returns null if no any parent element like(title,text or comment) is not present


// EXAMPLE:-
// console.log(document.body.firstElementChild)
// console.log(document.body.lastElementChild)
// console.log(document.lastElementChild)

// console.log(document.head.firstElementChild.nextElementSibling.previousElementSibling.nextElementSibling.nextElementSibling)
// console.log(document.body.firstElementChild.firstElementChild.nextElementSibling.parentElement.nextElementSibling.nextElementSibling)


// console.log(document.body.childElementCount)