// reduces does not modify the riginal array:-
// it returns a new array.

// let arr=[1,3,5,7,9,11,13,15];
// let m_arr=arr.reduce((a,b)=>{
//     return a+b;
// })
// console.log(m_arr)

let marks=[9,6,4,9,10,2,1,3,2];
let b=((a,b)=>{
    return(a+b)
})
let reduces=marks.reduce(b)