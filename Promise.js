// 5️⃣ Promises
// 🔹 What is Promise?

// Promise ek object hai jo future me ya to resolve hoga ya reject.

// 🔹 States

// Pending
// Fulfilled
// Rejected
// Example: -
const promise = new Promise((reslove, reject)=>{
    let success = true;
    if(success){
        reslove("Data reviced");
    }
    else{
        reject("Error Occured");
    }
});
promise
.then(result => console.log(result))
.catch(error => console.error(error));