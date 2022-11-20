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
  const [searchParameter, setSearchParameter] = useState('')

  const baseURL = 'https://swapi.dev/api/people';
  
  const getCharacterData = async (url) => {
    try {
      const response = await Axios.get(url)
      console.log(url)
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
  
  useEffect (() => {
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
  
  const handlePageChange = (page) => {
    if (page === 'previous') {
        getCharacterData(previousPageURL)
    } else if (page === 'next') {
        getCharacterData(nextPageURL)
    } else {
        getCharacterData(`https://swapi.dev/api/people/?page=${page}`)
    }
  }

  const handleSearchBarInput = (event) => {
    event.preventDefault();
    setSearchParameter(event.target);
}

  const handleSearch = (search) => {
    getCharacterData(`https://swapi.dev/api/people/?search=${search}`)
    setSearchParameter('')
  }
  
  return (
    <div className='container'>
      <h1 className='text-center mt-4'>Star Wars API Search</h1>
      <SearchBox handleSearchBarInput={ handleSearchBarInput } />
      <CharacterTable 
        characters={ characters }
        loading={ isLoading }
        />
      <Pagination handlePageChange={ handlePageChange } />
    </div>
  );
}

export default App;
