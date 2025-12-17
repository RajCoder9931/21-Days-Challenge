// 4️⃣ Callbacks
// 🔹 What is Callback?

// Ek function jo doosre function me argument ke roop me pass hota hai aur baad me call hota hai.
// Example: -

function fetchData(Callback){
    setTimeout(()=>{
        Callback("Data aa raha hai bhai ");
    }, 2000);
}
fetchData((msg) =>{
    console.log(msg);
});

//  problem : callback hell
login (user, ()=>{
    getprofile(()=>{
        getposts(()=>{
            getcomments(()=>{
                //  4️⃣
        });
          });        
    });
});
// here the error is readability and debugging is same time 