import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import SearchBox from './components/SearchBox';
import CharacterTable from './components/CharacterTable';
import Pagination from './components/Pagination';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [nextPageURL, setNextPageURL] = useState('');
  const [previousPageURL, setPreviousPageURL] = useState('');

  const baseURL = 'https://swapi.dev/api/people';
  
  useEffect (() => {
    const getCharacterData = async (url) => {
      try {
        const response = await Axios.get(url)
        const characterResults = response.data.results
        const nextPage = response.data.next;
        const previousPage = response.data.previous;
        
        for (let character of characterResults) {
          
          character.species.length === 0
          ? character.species = 'Human' 
          : character.species = await getSpeciesName(character.species)

          character.homeworld = await getHomeworldName(character.homeworld)
        }
        setCharacters(characterResults)
        setNextPageURL(nextPage)
        setPreviousPageURL(previousPage)
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
  
  // const handlePageChange = (e) => {
  //   e.target
  // }
  
  return (
    <div className='container'>
      <h1 className='text-center mt-4'>Star Wars API Search</h1>
      <SearchBox />
      <CharacterTable 
        characters={ characters }
        loading={ isLoading }
        />
      <Pagination pageNumber={ pageNumber } />
    </div>
  );
}

export default App;
