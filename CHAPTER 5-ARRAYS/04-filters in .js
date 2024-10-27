// filter does not modify the original array
// it creates a new array:-

let arr=[45,76,98,2,5,10];
let m=arr.filter((a)=>{
return a<10;
});
console.log(m)
console.log(arr)
