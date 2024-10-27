
// let a=[1,3,5,7,9,2,4,6,8,10];

// printing the arrays with simple for loop:-
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }


// suppose we want to performs a specific operations 

// For Each Loop:-

// a.forEach(element => {
//     console.log(element*element)
// });

// we can also do it by simple for loop but it is mostly used.


// for .... of loop:-
// by this we can print all the elements simple and uit's also a shortcut
// for(let i of a){
//     console.log(i)
// }

// For ..... in Loop:-
// this will print all the keys/index of an array  which we can not see
// it is basically use for object
// for(let i in a){
//     console.log(i)
// }
// we can also print elements like this:-
// for(let i in a){
//     console.log(a[i])
// }



let a=[1,3,5,7,9,2,4,6,8,10];
// for(let i=0; i<a.length; i++){
//      console.log(a[i]);
// }

// a.forEach((elements)=>{
//      console.log(elements+1);
// })

// for(let i of a){
//      console.log(i)
// }

for(let i in a){
     console.log(a[i])
}
