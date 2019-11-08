import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'
import StarCard from './components/StarCard'

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap
`
const App = () => {
  const [characters, changeCharacters] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people')
      .then((response) => {
        console.log(response.data.results)
        changeCharacters(response.data.results)
      })
      .catch((response) => {
        console.log(response);

      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StyledContainer>
        {characters.map((character) => {
          return <StarCard key={character.name} data={character} />
        })}
      </StyledContainer>
    </div>
  );
}

export default App;
