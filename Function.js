// Function kya hota hai? 
// Function reusable block of code hota hai jo kaam perform karta hai. 
// There are two types in function is simple and arrow function 
// in simple function we will write a long cod but in arrow fucntion in short code 

function add(a,b) {
 return a +b ;

}
console.log(add(3,5));

// using arrow function 
 const multiply = (a,b)  =>{
 return a * b;
    
 }
 console.log(multiply(4,6));

 // function with object 

function Printuser(Employee){
    console.log(Employee.data);
} 
const data ={
    name:"Ravi",
    age:22,
    role:"Developer"
}