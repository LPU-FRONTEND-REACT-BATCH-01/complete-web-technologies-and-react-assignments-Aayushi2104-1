let user_Data{
    name:"Aditi",
    age:22,
    profession:"Software Engineer"
}
user_Data.city="Pune";
user_Data.age=23;
object.freeze(user_Data);
object.seal(user_Data);
let keys=Object.keys(user_Data);
console.log(keys);
let values=Object.values(user_Data);
console.log(values);    
let pairs=Object.entries(user_Data);
console.log(pairs);