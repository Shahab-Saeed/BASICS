// To String Method:-
// converting array's elements or array to string:- 
// Converting int to string method:-
// let a=[1,3,5,7,9]
// let conv=a.toString()
// console.log(conv,typeof conv)

// joining method:-

// let b=a.join("  -  ")
// console.log(b)
// this will also return the array in the string type by default
// console.log(typeof b)

// pop method:- (worked with original array)
// removes the last element from the original array as arrays are mutable

// a.pop()
// console.log(a)
// if you want that the pop element should also be displayed you can do it like this:-
// let b=a.pop()
// console.log(a)
// console.log("the popped element is: ",b)

// Push Method:-(worked with original array)
// push is same as the append in python 
// a.push(32,53)
// console.log(a)
// as well as we can also return the new array length:-
// let b=a.push(32,53)
// console.log(a,b)

// Shift Method:-(worked with original array)
// removes the first element from an array:-
// a.shift()
// console.log(a)
// if you want that the shifted element should be printed you can do it like this:-
// b=a.shift()
// console.log(a,b)

// Unshift Method:-(worked with original array)
// add element to the start of an array:-
// a.unshift(32)
// console.log(a)
// you can also print its length by:-
// let b=a.unshift(32)
// console.log(b,a)

// Delete Method:-(worked with original array)
// delete the element of an array but its space will be reserved and there will be no change in length:-
// console.log(a.length)
// delete a[0]
// console.log(a,a.length)
// as you can see there is no cange in length and the space was reserved

// Concat Method:-
// adds an array and return a new array with nio chnage in the previous arrays:-
// b=[2,4,6,8,10]
// let n=a.concat(b)
// you can concat more than 1 arrays
// console.log(n)
// console.log(a)
// console.log(b)
// as you can see there is no difference in the previous arrays

// Reverse Method:-(worked with original array)
// a.reverse()
// console.log(a) // reverse the original array

// Splice Method:-(worked with original array):-
// a.splice(starting index,number of elements to be removed,number of elements to add and separating them with comma)
// let b=a.splice(1,3,2,4,6,8,10,12)
// console.log(a)
// console.log("the deleted elements are: ",b)

// Slicing Method:-
// works like string slicing in python:-
// let b=a.slice(1,4)
// console.log(b) // returns a new array with the slicing elements

// Sort Method:-(worked with original array):-
// let a=[1,3,5,7,9,11,13,2,4,6,8,10,12,14]
// a.sort()
// console.log(a)
// NOTE:-
        // this will arrange in alphabetical order like all the elements startig with 1 will comes first then the elements starting with 2 will come and so on........
// // Sorting with ascending order:-
// // for this you have to write a function:-
// let ascending=(a,b)=>{
//     return a-b
// }
// a.sort(ascending)
// console.log(a)

// Sorting with descending order:-
// for this you have to write a function:-
// let descending=(a,b)=>{
//     return b-a
// }
// a.sort(descending)
// console.log(a)


// Array.from:-
// it can covert any thing into an array
// For Example:-
// let a="shahab saeed";
// console.log(a, typeof a)
// let b=Array.from(a)
// console.log(b,typeof b)

// INDEXOF METHOD:-
// returns the index after enetering the element (only first occurence)
let a=[1,3,5,7,9,7]
console.log(a.indexOf(2))


