// NOT RECOMMENDABLE:-

// var is a globally scoped variable

// var can be initialized
var c;

// we can redeclare/change the value of a var
var name="shahab saeed";
var age=20;
var gender=true;
var fault=null;
var mental_state=undefined;

// changin the value of a var variable
var name="Aatika Zaman";
name="ahmed";
console.log(name)

// we can also change the var variabe inside the block but by doing this var variable will also changed globally

{
     var name="aatika zaman khan";
     console.log(name);
}

console.log(name);

// Var does not respect block spaces
// but it respects functions
// For Exampke:-


