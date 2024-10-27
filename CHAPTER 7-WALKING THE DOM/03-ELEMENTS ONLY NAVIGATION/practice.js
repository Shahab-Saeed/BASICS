// whenever we print the first child and if there is a space we will only get the text 
// but if we use firstElementChild we will directly get the firsr child element even if there is any text, comment,title node
// a=document.body

// PROBLEM:-
// console.log(a.firstChild) // this will print the text

// SOLUTION:-
// console.log(a.firstElementChild) // this will print the first element


// OTHERS EXAMPLE:-

// console.log(a.lastElementChild)

// console.log(a.firstChild.nextElementSibling)

// console.log(a.lastChild.previousElementSibling)

// console.log(document.body.lastChild.previousElementSibling)

