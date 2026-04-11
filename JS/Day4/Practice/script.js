function addSpice(){
    let addSpice=true;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(addSpice){
                console.log("spice added");
                resolve();
            }
            else{
                reject("spice not added")
            }
        }, 1000)
    })
}
function pourOil(){
    let pourOil=true;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(pourOil){
                console.log("oil poured");
                resolve();
            }
            else{
                reject("oil not poured");
            }
        }, 2000)
    })
}
function fryOnion(){
    let fryOnion=true;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(fryOnion){
                console.log("onion fried");
                resolve();
            }
            else{
                reject("onion not fried");
            }
        }, 3000)
    })
}
function addRice(){
    let addRice=true;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(addRice){
                console.log("rice added");
                resolve();
            }
            else{
                reject("rice not added");
            }
        }, 4000)
    })
}

// addSpice()
// .then(()=>pourOil())
// .then(()=>fryOnion())
// .then(()=>addRice())
// .catch((error)=>{
//     console.log(error);
// })
//async await
async function cookbriyani(){
    try{
        await addSpice();
        await pourOil();
        await fryOnion();
        await addRice();
    } catch (error) {
        console.log(error);
    }
}
cookbriyani()