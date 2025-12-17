// What is this?

// this current execution context ka reference hota hai.

// 👉 this ka value function kaise call hua hai uspe depend karta hai.

// 🔹 Global Context
// console.log(this); 

// Browser → window
// Node.js → {}
// Inside the Object Method 
const user ={
 name : "Ravi",
 greet(){
    console.log(this.name);
 }
};
user.greet();


// Arrow function method
const obj ={
    name:"Raj Bhai Kya haal Hai ",
    greetmessage: () =>{
        console.log(this.name);
    }
};
obj.greetmessage();
