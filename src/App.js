import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import SearchBar from './components/SearchBar';
import CharacterTable from './components/CharacterTable';
import Pagination from './components/Pagination';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false)
  const [nextPageURL, setNextPageURL] = useState('');
  const [previousPageURL, setPreviousPageURL] = useState('');
  const [searchParameter, setSearchParameter] = useState('');

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
    setCharacters([])
    
    page === 'Next'
    ? setPageNumber(pageNumber + 1)
    : setPageNumber(pageNumber - 1)

    pageNumber === 1
    ? setIsFirstPage(true)
    : setIsFirstPage(false)

    pageNumber === 9
    ? setIsLastPage(true)
    : setIsFirstPage(false)

    page === 'Next'
    ? getCharacterData(nextPageURL)
    : getCharacterData(previousPageURL)
  }

  const handleSearchBarInput = (event) => {
    event.preventDefault();
    setSearchParameter(event.target.value);
    console.log(searchParameter)
}

  const handleSearch = (event) => {
    event.preventDefault();
    getCharacterData(`https://swapi.dev/api/people/?search=${searchParameter}`);
  }
 
  return (
    <div className='container'>
      <h1 className='text-center mt-4'>Star Wars Character Search</h1>
      <SearchBar
       handleSearchBarInput={ handleSearchBarInput } 
       handleSearch={ handleSearch }
       />
      <CharacterTable 
        characters={ characters }
        loading={ isLoading }
        />
      <Pagination 
        handlePageChange={ handlePageChange }
        firstPage={ isFirstPage }
        lastPage={ isLastPage }
        />
    </div>
  );
}

export default App;
