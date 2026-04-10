// let arr=[12,"hello",true,undefined];
console.log(arr);
arr.push(21)
console.log(arr);
arr.shift(100)
console.log(arr);
arr.unshift(100)
console.log(arr);
arr.pop()
console.log(arr);
console.log(arr.length);
console.log(arr.at(3));
console.log(arr.join("-"));

let arr1=[1,2,3,4,5];
let arr2=["hello","world"];

console.log(arr1.concat(arr2));
let carData =[
            {
            id:1,
            name: "watch" ,
            price : 1999
            },
            {
            id:2,
            name: "shoes" ,
            price : 199
            },
            {
            id:3,
            name: "phone" ,
            price : 19999
            }

        ]

        let total_ammount = carData.reduce((prev,value)=>{
 
            return prev+ value.price
        },0)

        console.log(total_ammount);
  let arr =["hello","world","javascript"];      
 arr.map((value,index)=>{
    console.log(value,index);
 })

 let arr3=[1,2,3,4,5];
 let result=arr3.reduce((prev,value)=>{
    return prev+value
 },0)

 console.log(result);
 let arr4=[1,23,63,25,73,5]
arr4.sort((a,b)=>a-b)
arr4.sort((a,b)=>b-a)
console.log(arr4);

//filter array
let arr5=[1,2,3,4,5,6,7,8,9,10]
let filterarr=arr5.filter((value)=>{
    return value>20
})
console.log(filterarr);


