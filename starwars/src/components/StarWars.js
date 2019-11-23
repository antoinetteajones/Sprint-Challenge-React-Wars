import React from "react";
import styled from "styled-components";
import {Col} from "reactstrap";

const DarkVader = styled.div`
 .characters{
    background-color: lightgrey;
    color: black;
    width: 350px;
    max-height: 800px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    border: 2px solid black;
    border-radius: 20px;
    padding: 20px;
 }
`
const StarWars = props => {

    return (
        
        <Col xs="6" sm="4" >

            <DarkVader>
                <div className="characters">
                    <h2>My name is: {props.name}</h2>
                    <p>I was born in the year of {props.birth}</p>
                    <p>My gender is {props.gender}</p>
                    <p>My hair color is {props.hair}</p>
                </div>
            </DarkVader>
        </Col>
    )
}
export default StarWars;
