// In java script non primitive data type is an object

// objects are like dictionaries as we have studied in python

// const b={
//      name:"shahab saeed",
//      age:20,
//      bloodGroup:"A+"
// }

// we can also change the value of the object using name_of_the_object.key:-
// b.name="aatika zaman khan";
// b.age=20;
// b.bloodGroup="A+";

// or:-

// b['name']="shahab saeed";
// b['age']=20;
// b['bloodGroup']="B+";

// we can also add values to the object
// b["gender"]="female"

// printing the whole object
// console.log(b);

// printing the object's values using keys 

// console.log(b["name"]);
// console.log(b["age"]);
// console.log(b["bloodGroup"]);



// if we try to print such value which does not exist in an object by using keys then the result will be undefined

// console.log(b["a"]);


// QUESTIONS:-

// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };


// SOLUTION:-
// let student = {
//      name : "David Rayy",
//      sclass : "VI",
//      rollno : 12 
// }
// console.log(student);
// console.log(student['name'])
// console.log(student['sclass'])
// console.log(student['rollno'])


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };


// SOLUTION:-

// var student = {
//      name : "David Rayy",
//      sclass : "VI",
//      rollno : 12 
// };
// delete student.rollno
// console.log(student)     
     

// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// SOLUTION:-

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

console.log(student.length)