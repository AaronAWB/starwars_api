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
        let speciesResult = response.results.name;
        if (!speciesResult) {speciesResult='Human'}
        console.log(speciesResult)
        return speciesResult
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect (() => {
    Axios
      .get('https://swapi.dev/api/people')
      .then(response => {
        console.log(response)
        const characterResults = response.data.results
        
        for (const character in characterResults) {
          
          if (character.species) {
            character.species = getSpecies(character.species)
            console.log(character.species)
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
