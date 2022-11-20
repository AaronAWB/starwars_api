import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import SearchBox from './components/SearchBox';
import CharacterTable from './components/CharacterTable';
import Pagination from './components/Pagination';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSpeciesName = (speciesURL) => {
    Axios
      .get(speciesURL)
      .then(response => {
        console.log(response)
        const speciesResult = response.data.name;
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
        const initialCharacterResults = response.data.results
        const completeCharacterResults = initialCharacterResults.map((character) => {
            character.species.length === 0
            ? character.species = 'Human'
            : character.species = getSpeciesName(character.species)
            return character
            })
        console.log(completeCharacterResults)
        setCharacters(completeCharacterResults)
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
