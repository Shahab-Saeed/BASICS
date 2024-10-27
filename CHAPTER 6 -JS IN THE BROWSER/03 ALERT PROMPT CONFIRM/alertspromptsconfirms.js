// alert("hello enter a number:")
// // let a=prompt("Enter A Number Here:")
// // if you give the second parameter then the parameter will be shown as default
// // For Example:-
// let a=prompt("enter the number",32)
// // prompt will always have the data type of string
// // if you wants to convert the data type
// // you can use type casting
// a=Number.parseInt(a);
// alert("the data type of number is: "+(typeof a))
// // if ypu want that the number you enetered would be written on browser
// //  you can do this:
// document.write(a)


// CONFIRM:-
// confirm basically gives you two options like opk or cancel

// For Example:-
let c="shahab saeed";
let b=confirm("do you want to wriite the author's name?")
if (b){
    document.write(c)
}
else{
    
    alert("sorry we have to write this.")
    document.write(c)
}
