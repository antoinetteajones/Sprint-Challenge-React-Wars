import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import StarWars from "../src/components/StarWars";
import {Container, Row} from "reactstrap";

const App = () => {
  const [war, setWar] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        const war = response.data.results;
        console.log(war)
        setWar(war);
      })
      .catch(error => {
        console.log("ERROR:", error)
      });
  }, []);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container>
        <h1 className="Header">React Wars</h1>

      <Row>
        
        {war.map(char => {
          return (
            <StarWars key={char.id}
              name={char.name}
              birth={char.birth_year}
              gender={char.gender}
              hair={char.hair_color}
            />
          )

        })}
      </Row>
    </Container>
  );
}

export default App;
