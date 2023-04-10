import React, { useState, useEffect } from "react";
import axios from "axios";
import './axios.css'

function Axios() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    
    <div className="page">
        <h1>Rick n Morty</h1>
        <div className="axios">
            
      {Data?.map((character) => (
        <div key={character.id} className="content">
          <img src={character.image} alt="" />
          <div className="details">
          <p>Name: {character.name}</p>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p></div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Axios;