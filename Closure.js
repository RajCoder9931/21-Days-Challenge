// What is Closure?

// Closure tab banta hai jab ek function apne outer function ke variables ko “yaad” rakhta hai,
//  even after outer function  execute ho chuka ho.

// 👉 JavaScript functions lexical scope follow karte hain.
// Example: -
function outer (){
    let count = 0;
    function inner (){
        count ++;
        console.log(count);
    }
    return inner;
}
const counter = outer();
counter();
counter();
counter();

// Yahan kya hua?

// outer() execute ho gaya

// BUT inner() ke paas count ka reference abhi bhi hai

// Yehi closure hai

// 🔹 Real-life use

// 1.Data hiding
// 2.Counters
// 3.Private variables
// 4.React hooks (useState works on closure)

// 🔹 Interview Line

// Closure is a feature where an inner function has access to its outer function’s variables
//  even after the outer function has finished execution.