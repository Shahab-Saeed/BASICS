// let is not a globally scoped like var

// let can be initialized:-
let c;


let name="shahab saeed";
let age=20;
let gender=true;
let fault=null;
let mental_state=undefined;

// if we made a let again of the existed variable then it will gives an error
// let name="aatika zaman khan";

// you cannot redeclared the variable using let but you change the value like a="...";
name="aatika zaman khan";
console.log(name);

// if you change the let variable indie the any block then in only that block the value of let variable will  be changed but not glbally
{
     let name="ahmed hassan";
     console.log(name);
}

{
     let name="shahab saeed";
     console.log(name);
}
// now if you prints outside the block of the same value then it will prints the value you have declared before the block
console.log(name);