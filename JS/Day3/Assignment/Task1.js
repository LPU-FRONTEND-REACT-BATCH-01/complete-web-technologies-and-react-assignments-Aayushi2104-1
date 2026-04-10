let carData=[
    {
        id:1,
        name: "watch" ,
        price : 2999,
        quantity : 2
    },
{
    id:2,
    name: "shoes" ,
    price : 199,
    quantity : 5
},
{
    id:3,
    name: "earphone" ,
    price : 299,
    quantity : 10
},
{
    id:4,
    name: "phone" ,
    price : 19999,
    quantity : 3
},
{
    id:5,
    name: "laptop" ,
    price : 49999,
    quantity : 1
}]
//sort->names
//sort->prices high to low , low to high
//filter->price>2000
//assending order
let sortname1=carData.sort((a,b)=>{
    if(a.name>b.name){
        return 1;
    }
    if(a.name<b.name){
        return -1;
    }
})

console.log(sortname1);

//desending order
let sortname2=carData.sort((a,b)=>{
    if(a.name<b.name){
        return 1;
    }
    if(a.name>b.name){
        return -1;
    }
})
console.log(sortname2);
carData.sort((a,b)=>{
    return a.price-b.price
})
console.log(carData);
carData.sort((a,b)=>{
    return b.price-a.price
})
console.log(carData);

let filterarr=carData.filter((value)=>{
    return value.price>2000
})
console.log(filterarr);