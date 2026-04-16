import UserCard from "./UserCard";

let User = () => {
 let User1={
        name:"Aayushi",
        age:22,
        city:"Pune"
    }
    let User2={
        name:"Aniket",
        city:"Mumbai"
    }
    let User3={
        name:"Anshul",
        age:25,
        city:"Delhi"
    }

    return(
        <>
        <UserCard user={User2}/>
        <UserCard user={User3}/>
        <UserCard user={User1}/>
        </>
    );
} 
 
export default User;