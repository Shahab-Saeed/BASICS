// const is like a constant
// you can not redeclared the constant nor you can update the constant's value

// const cannot be initialized
// const a;


const name="shahab saeed";
const age=20;
const gender=true;
const fault=null;
const mental_state=undefined;

// redeclaring the const
// const name="aatika zaman khan"; // this will gives an error as const cannot be declared

// updating the const
// name="aatika zaman khan";
// console.log(name);  // this will also gives an error as const value cannot be changed


// changing the value of the const variable in the blocks

// const can be changed in any block
{
     const name="fahad saeed"
     console.log(name)
}

// but if we print the const value outside the blok then it will prints the value declared before the block
console.log(name)