import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import SearchBox from './components/SearchBox';
import CharacterTable from './components/CharacterTable';
import Pagination from './components/Pagination';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    Axios
      .get('https://swapi.dev/api/people')
      .then(response => {
        console.log(response)
        const characterResults = response.data.results
        setCharacters(characterResults)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  const getSpecies = (n) => {
    Axios
      .get(`https://swapi.dev/api/species/${[n]}`)
      .then(response => {
        console.log(response)
        const species = response.data.results.name
        setSpecies(species)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const getHomeworld = (n) => {
    Axios
      .get(`https://swapi.dev/api/homeworld/${[n]}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
      const homeworld = response.data.results.name
    return homeworld
  }

  useEffect(() => {
    if (characters.length !== 0) {
      setIsLoading(false);
    }
  }, [characters]);


  return (
    <div className='container'>
      <h1 className='text-center'>Star Wars API Search</h1>
      <SearchBox />
      <CharacterTable characters={ characters, getSpecies, getPlanet }/>
      <Pagination />
    </div>
  );
}

export default App;
