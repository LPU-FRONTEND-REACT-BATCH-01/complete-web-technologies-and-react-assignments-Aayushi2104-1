
const Card = (props) => {
    console.log(props.variable)
    return(
        <div>   
            <h1>Card Component</h1>
            <h2>{props.variable}</h2>
        </div>
    );
}