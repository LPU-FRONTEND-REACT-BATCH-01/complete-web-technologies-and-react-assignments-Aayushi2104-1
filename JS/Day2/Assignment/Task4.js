//function to take username,email and password
//username remove extra spaces and convert to lowercase
//email to lowercase and split the email and get the domain name and username
//password check the length of greater than 8 then check it contains @,*,/
let username;
let email;
let password;

function data(){
    username=(prompt("Enter name:"));
    password=(prompt("Enter password:"));
    email=(prompt("Enter email:"));
    return username,password,email;
}

function validate(username,password,email){
    username=username.toLowerCase().trim();
    email=email.toLowerCase().trim();
    let emails=email.split("@");
    let user=emails[0];
    let domain=emails[1];
    console.log("Username: "+user);
    console.log("Domain: "+domain);
    if(password.length>8 && (password.includes("@") && password.includes("*") && password.includes("/"))){
        console.log("Password is valid");
    }else{
        console.log("Password is invalid");
    }
}
data();
validate(username,password,email);