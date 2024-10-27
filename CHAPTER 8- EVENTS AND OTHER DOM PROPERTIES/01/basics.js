// CONSOLE.LOG:-(only shows the content inside it with tag name)

// console.log(document.body.firstElementChild)// this will only print the contents of the first tag with the tag name
// console.log(document.body.firstElementChild.nextElementSibling)// this will only print the contents of the second tag with the tag name
// console.log(document.body.getElementsByTagName('p')[1])// this will only print the contents of the third tag with the tag name
// console.log(document.body.getElementsByTagName('p')[1].nextElementSibling)// this will only print the contents of the fourth tag with the tag name
// console.log(document.body.lastElementChild.previousElementSibling)// this will only print the contents of the fifth tag with the tag name
// console.log(document.body.lastElementChild)// this will only print the contents of the sixth tag with the tag name 

// THIS WILL PRINTS THE SAME RESULT AS:-


// console.log(document.body.firstElementChild)
// console.log(document.body.firstElementChild.nextElementSibling)
// console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling)
// console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling)
// console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling)
// console.log(document.body.lastElementChild)

// THIS WILL ALSO PRINTS THE SAME RESULT AS ABOVE:-

// console.log(document.getElementsByTagName("p")[0])
// console.log(document.body.getElementsByTagName("span")[0])
// console.log(document.getElementsByTagName("p")[1])
// console.log(document.getElementsByTagName("h1")[0])
// console.log(document.getElementsByTagName("div")[0])
// console.log(document.getElementsByTagName("script")[0])


// CONSOLE.DIR:-(only shows the tag name with its properties)

// console.dir(document.body.firstElementChild)// this will only print first tag with the its properties
// console.dir(document.body.firstElementChild.nextElementSibling)// this will only print second tag with the its properties
// console.dir(document.body.getElementsByTagName('p')[1])// this will only print third tag with the its properties
// console.dir(document.body.getElementsByTagName('p')[1].nextElementSibling)// this will only print fourth tag with the its properties
// console.dir(document.body.lastElementChild.previousElementSibling)// this will only print fifth tag with the its properties
// console.dir(document.body.lastElementChild)// this will only print sixth tag with the its properties


// NODENAME 

// this will basically gives us all the nodes(element, text, comment) we used without its properties and the content inside it

// console.log(document.body.firstElementChild.nodeName)
// console.log(document.body.firstElementChild.nextElementSibling.nodeName)
// console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling.nodeName)
// console.log(document.body.getElementsByTagName('p')[1].nextElementSibling.nodeName)
// console.log(document.body.lastElementChild.previousElementSibling.nodeName)
// console.log(document.body.lastElementChild.nodeName)

// TAGNAME:- 

// this will be used for text and comments


