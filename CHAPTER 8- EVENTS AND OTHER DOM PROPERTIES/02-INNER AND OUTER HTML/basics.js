// for inner html we have to give the id to an element
// we can print or update the html text or we can add tag inside the dom or in our js file
// inner html will also give the tags used inside the text for example it is <b>bold</b> and it is <i>italic</i>


// INNER HTML:-

// UODATING THE HTML:-

// first.innerHTML="<p>inner html will also give the tags used inside the text for example it is <b>bold</b> and it is <i>italic</i></p>"
// '<p>inner html will al so give the tags used inside the text for example it is <b>bold</b> and it is <i>italic</i></p>'



// OUTER HTML:-
 
// works same as inner html but it will gives tag name + inner html

// first.outerHTML
// '<span id="first">this is a span</span>'


// UODATING THE HTML:-

// first.outerHTML="<div> hey</div>"

// NOTE:-   
 
// inner html is only for element node
// if we want to print the text niode or comment nide we can use .data or .nodeValue

// USING DATA:-
// console.log(document.body.firstChild.data)

// USING NODE VALUE
// console.log(document.body.firstChild.nodeValue)


// TEXT OF BODY PROPERTY:-

// if we write
// console.log(document.body.textContent)
// console.log(document.body.textContent) 


// HIDDEN PROPERTY:-

// if we use word hidden with any element then the element will not be shown in web page
// if we want to correct it in dom:-
// we can use idname.hidden=false


// getting the text inside the page

// console.log(document.body.textContent)


// PRACTICE

// console.log(first.innerHTML)
// console.log(document.getElementById("first").innerHTML)
// console.log(first.innerHTML="<h1>SHAHAB SAEED</h1>")

// console.log(first.outerHTML)
// console.log(document.getElementById("practice").outerHTML)
// console.log(first.outerHTML="<h1>SHAHAB SAEED</h1>")

// console.log(document.body.firstChild.data)
// console.log(document.body.firstChild.nodeValue)

// console.log(document.body.textContent)



