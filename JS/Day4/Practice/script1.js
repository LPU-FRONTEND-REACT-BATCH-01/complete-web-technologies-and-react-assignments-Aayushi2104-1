//https://dummyjson.com/products

async function fetchdata(){
    try{
    // let res= await fetch("https://dummyjson.com/products");
    let res= await fetch("http://localhost:8083/gateway/documents/admin/pending");
    // console.log(res);       

    if(res.ok){
        let data= await res.json();
        console.log(data);
    }   
    else{
        console.log("there is http error");
    }
}
catch(error){
    console.log("unable to fetch data");
}
}
fetchdata();