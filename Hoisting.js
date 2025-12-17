// What is Hoisting?

// JavaScript execution se pehle variables aur functions ko memory me move karta hai.

// ⚠️ Declaration hoist hoti hai, initialization nahi
console.log(a);
a = 10;

aaygya();
function aaygya (){
    console.log("I am Back ")
}


sayhello()
const sayhello = () =>{
    console.log("Hello Jaan I Am Back");
}

// Interview Line

// Hoisting is JavaScript’s default behavior of moving declarations to the top of the scope before execution.