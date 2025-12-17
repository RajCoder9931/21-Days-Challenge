async function postfetch(){
    try {
        const response = await fetch("");
        const daata = await response.json(); 
        console.log(daata);
    }
    catch(error){
        console.log(error);
    }

}
