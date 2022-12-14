import React from 'react'
import Axios from 'axios'
import { useEffect, useState, useCallback } from 'react'

import SearchBar from './components/SearchBar';
import CharacterTable from './components/CharacterTable';
import Pagination from './components/Pagination';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastPageNumber, setLastPageNumber] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false)
  const [nextPageURL, setNextPageURL] = useState('');
  const [previousPageURL, setPreviousPageURL] = useState('');
  const [searchParameter, setSearchParameter] = useState('');

  const baseURL = 'https://swapi.dev/api/people';

  useEffect (() => {
    getCharacterData(baseURL)
  }, [])

  useEffect(() => {
    characters.length !== 0 ? setIsLoading(false) : setIsLoading(true);
  }, [characters]);

  useEffect (() => {
    currentPage === lastPageNumber ? setIsLastPage(true) : setIsLastPage(false)
  }, [lastPageNumber, currentPage])
  
  const getCharacterData = useCallback(async (url) => {
    try {
      const response = await Axios.get(url)
      const data = response.data;
      const characterResults = data.results;
      const totalCharacters = data.count;
      const nextPage = data.next;
      const previousPage = data.previous;
      
      for (let character of characterResults) {
        
        character.species.length === 0
        ? character.species = 'Human' 
        : character.species = await getSpeciesName(character.species)

        character.homeworld = await getHomeworldName(character.homeworld)
      }
      setCharacters(characterResults)
      setNextPageURL(nextPage)
      setPreviousPageURL(previousPage)
      setLastPageNumber(Math.ceil(totalCharacters / 10))
    } 
    catch (error) {
      console.log(error)
    }
  }, [])
  
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

    if (page === 'Next') {
      setCurrentPage(currentPage + 1)
      getCharacterData(nextPageURL)
    } else {
      setCurrentPage(currentPage - 1)
      getCharacterData(previousPageURL)
    }
  }
     
  const handleSearchBarInput = (event) => {
    event.preventDefault();
    setSearchParameter(event.target.value);
    console.log(searchParameter)
}

  const handleSearch = (event) => {
    event.preventDefault();
    getCharacterData(`https://swapi.dev/api/people/?search=${searchParameter}`);
    setCurrentPage(1);
  }

  const handleClearSearch = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    setLastPageNumber(null);
    setSearchParameter('');
    getCharacterData(baseURL);
  }
 
  return (
    <div className='container'>
      <h1 className='text-center mt-4'><span className='header-span'>Star Wars</span> Character Search</h1>
      <SearchBar
       handleSearchBarInput={ handleSearchBarInput }
       handleSearch={ handleSearch }
       clearSearch={ handleClearSearch }
       searchParameter={ searchParameter } 
       />
      <CharacterTable 
        characters={ characters }
        loading={ isLoading }
        />
      <Pagination 
        handlePageChange={ handlePageChange }
        lastPageNumber={ lastPageNumber }
        currentPage={ currentPage }
        lastPage={ isLastPage }
        />
    </div>
  );
}

export default App;
