//write function that will accept username,email,password
function data() {
    let username = prompt("Enter name:");
    let password = prompt("Enter password:");
    let email = prompt("Enter email:");

    return {
        username,
        password,
        email
    };
}

let userdata = data();
console.log(userdata);
