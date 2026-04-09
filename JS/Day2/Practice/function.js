// function display(name="Not available") {
//     console.log("Hello " + name);
// }
// display();

// //a function assigned to a variable it called first class function
// let greet = function (name="Not available") {
//     console.log("Hello " + name);
// }
// greet();

// //Immediately Invoked Function Expression (IIFE)
// (function fetchData() {
//     console.log("Fetching data...");
// })();


// let arrow = () => {
//     console.log("This is an arrow function");
// }
// arrow();

// let add = (a, b) => a + b;
// let res = add(5, 10);
// console.log("The sum is: " + res);

let a = 10;

function calculator(a, b, operation) {
    return operation(a, b);
}

let sub = (a, b) => {
    return a - b;
}
let result = calculator(a, 5, sub);
console.log("The difference is: " + result);


[12:44 pm, 09/04/2026] Devanshu Cap: 
// // shorter form

// let arrow1 = name => "Hello " + name;
// console.log(arrow1("Devanshu"));

//higher order function

function calclator(a , b , operation) {
    return operation(a,b) ;
}

let add = (a,b) => {
    return a + b ;
}

let results2 = calclator (10,20,add);
console.log(results2);


let results = add(12,32) ;
console.log(results);
// let temp =0  ;

// function add (){
//     let a = 20 , b =30 
//     return a+ b ;
// }

// let result = add () ;
// console.log(result);
// // shorter form

// let arrow1 = name => "Hello " + name;
// console.log(arrow1("aayushi"));

//higher order function

function calclator(a , b , operation) {
    return operation(a,b) ;
}

let add = (a,b) => {
    return a + b ;
}

let results2 = calclator (10,20,add);
console.log(results2);


let results = add(12,32) ;
console.log(results);
let temp = 0 ;

function calculator (a, b , operation){
    return operation(a,b) ;
}

function add (a_from_calculator , b_from_calculator){
    return a_from_calculator + b_from_calculator;
}

let result = calculator(10,20,add);
console.log(result);

let dummy = 0 ;

function kalisah() {
    let grand_land = 10 ;
    function shyam() {
        let father_land = 5 ;
        function arman (){
            let arman_land = 12 ;
            let total_land = grand_land + father_land + arman_land ;
            console.log(total_land);
            
        }
        arman();
        
    }
    shyam();
    
}
kalisah();
let a = 10 ;
let b = 20 ;


function test() {
    var a = 30 ;
    const d = 50 ;
    let local_variable = 50 ;
    console.log(a);
    
    
}



console.log(a);
console.log(b);

if (true){
    let a = 10
    const b =20
    var c =40
}

function demo2() {
    var demo =20 ;
    
}

console.log(a);
console.log(c);
console.log(window.a);