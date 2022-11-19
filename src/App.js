import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import SearchBox from './components/SearchBox';
import CharacterTable from './components/CharacterTable';
import Pagination from './components/Pagination';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSpecies = (speciesURL) => {
    Axios
      .get(speciesURL)
      .then(response => {
        const speciesResult = response.data.name;
        if (!speciesResult) {speciesResult='Human'}
      })
      .catch(error => {
        console.log(error)
      })
    return speciesResult
  }

  useEffect (() => {
    Axios
      .get('https://swapi.dev/api/people')
      .then(response => {
        console.log(response)
        const characterResults = response.data.results
        
        for (character of characterResults) {
          // const homeworldURL = characterResults.homeworld;
          const speciesURL = characterResults.species
          
          if (character.species) {
            getSpecies(speciesURL);
          }

        }

        setCharacters(characterResults)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  useEffect(() => {
    if (characters.length !== 0) {
      setIsLoading(false);
    }
  }, [characters]);


  return (
    <div className='container'>
      <h1 className='text-center'>Star Wars API Search</h1>
      <SearchBox />
      <CharacterTable characters={ characters }/>
      <Pagination />
    </div>
  );
}

export default App;
