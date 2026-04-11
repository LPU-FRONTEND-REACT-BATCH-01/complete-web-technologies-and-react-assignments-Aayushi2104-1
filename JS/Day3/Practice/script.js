//let arr=["apple","banana","grapes","mango","orange"];
let result=arr.some(ele=>ele==="apple")
console.log(result);

let users=[
    {
    id:1,
    username : "aayushi" ,
    password : "1234"
    }
,{
    id:2,
    username : "aayushi1" , 
    password : "12345"
    }
,{
    id:3,
    username : "aayushi2" , 
    password : "123456"
    }
]
let inputdata={
    username : "aayushi" ,
    password : "1234"
}
let result1=users.some(ele=>ele.username===inputdata.username && ele.password===inputdata.password)
console.log(result1);

//copying data from one array to another array

let original_Object={
    id:1,
    name:"Nick",
    city:"Pune"
}
let duplicate =structuredClone(original_Object);
let duplicate1={...original_Object}
let arr=[1,2,3,4,5]
console.log(arr);
console.log(...arr,6);




















 

