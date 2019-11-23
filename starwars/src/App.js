import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import StarWars from "../src/components/StarWars";

const App = () => {
  const [war, setWar] = useState({})
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
useEffect(() => {
  axios
    .get("https://swapi.co/api/people/")
      .then(response =>{
        console.log(response.data.results)
        const war = response.data.results;
        console.log(war)
        setWar(war);
      })
      .catch(error =>{
        console.log("ERROR:", error)
      });
}, []);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div>
    {war.map(char => {
      return(
        <StarWars 
        name = {char.name}
        birth = {char.birth_year}
        gender = {char.gender}
        homeworld = {char.homeworld}
        />
      )
        
    })}
   </div>
  );
}

export default App;
