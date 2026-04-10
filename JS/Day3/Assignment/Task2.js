//validate password print navigate to home page
//username is found then print signup 

let users = [
    {
        id: 1,
        username: "aayushi",
        password: "aayu1234"
    }
    , {
        id: 2,
        username: "Abhijeet",
        password: "abhi123"
    },
    {
        id: 3,
        username: "Anshul",
        password: "anshul123"
    }
    , {
        id: 4,
        username: "Ansh",
        password: "ansh123"
    }
]
let inputdata = {
    username: "anshul",
    password: "anshul123"
}
let result = users.some(ele => ele.username === inputdata.username)

if (result) {
    let result1 = users.find(ele => ele.username === inputdata.username)
    if (result1.password === inputdata.password) {
        console.log("navigate to home page");
    }
    else {
        console.log("invalid password");
    }
}
else{
    console.log("signup");
}
