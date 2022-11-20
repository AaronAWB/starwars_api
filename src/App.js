import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import SearchBox from './components/SearchBox';
import CharacterTable from './components/CharacterTable';
import Pagination from './components/Pagination';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [species, setSpecies] = useState('');

  const getHomeworldName = async (homeworldURL) => {
    const homeworld = await Axios.get(homeworldURL)
    return homeworld.data.name
    }

  const getSpeciesName = async (speciesURL) => {
    const species = await Axios.get(speciesURL)
    return species.data.name
    }
  
  useEffect (() => {
    const getCharacterData = async () => {
      try {
        const response = await Axios.get('https://swapi.dev/api/people')
        const characterResults = response.data.results
        
        for (let character of characterResults) {
          
          character.species.length === 0
          ? character.species = 'Human' 
          : character.species = await getSpeciesName(character.species)

          character.homeworld = await getHomeworldName(character.homeworld)
        }
        setCharacters(characterResults)
      } 
      catch (error) {
        console.log(error)
      }
    }
    getCharacterData()
  }, [])

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
