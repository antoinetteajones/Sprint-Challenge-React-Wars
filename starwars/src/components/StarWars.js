import React from "react";


const StarWars = props => {

    return(
        <div>
        <h1>My name is: {props.name}</h1>
        <p>I was born in the year of {props.birth}</p>
        <p>I am a {props.gender}</p>
        <p>My homeworld is {props.homeworld}</p>
        </div>
    )
}
export default StarWars;
