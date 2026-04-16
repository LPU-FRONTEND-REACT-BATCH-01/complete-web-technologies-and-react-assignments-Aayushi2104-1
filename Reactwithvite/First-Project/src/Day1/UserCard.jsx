import React from "react";
const UserCard = ({ user :{name,age="not given",city}}) => {
    //let {name,age,city} = props.user;
    return(
        <div>   
            {/* <h1>User Card </h1> */}
            {/* <h2>Name:{props.user.name}</h2> */}
            {/* <h2>Name:{name}</h2>
            <h2>Age:{age}</h2> */}
            {/* <h2>Age:{props.user.age}</h2> */}
            {/* <h2>City:{city}</h2> */}
            {/* <h2>City:{props.user.city}</h2> */}
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h3>{city}</h3>
        </div>
    );
}
export default UserCard;