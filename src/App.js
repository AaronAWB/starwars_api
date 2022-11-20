import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import SearchBox from './components/SearchBox';
import CharacterTable from './components/CharacterTable';
import Pagination from './components/Pagination';

const App = () => {

  const [baseURL, setBaseURL] = useState('https://swapi.dev/api/people')
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] =useState(1)
  
  useEffect (() => {
    const getCharacterData = async (url) => {
      try {
        const response = await Axios.get(url)
        const characterResults = response.data.results
        console.log(response)
        
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
    getCharacterData(baseURL)
  }, [])

  useEffect(() => {
    characters.length !== 0
    ? setIsLoading(false)
    : setIsLoading(true);
  }, [characters]);

  const getHomeworldName = async (homeworldURL) => {
    const homeworld = await Axios.get(homeworldURL)
    return homeworld.data.name
    }

  const getSpeciesName = async (speciesURL) => {
    const species = await Axios.get(speciesURL)
    return species.data.name
    }
  
  return (
    <div className='container'>
      <h1 className='text-center mt-4'>Star Wars API Search</h1>
      <SearchBox />
      <CharacterTable 
        characters={ characters }
        loading={ isLoading }
        />
      <Pagination />
    </div>
  );
}

export default App;
