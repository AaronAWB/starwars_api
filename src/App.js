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
    for (let i = 1; i < 10; i++) {
    Axios
      .get(`https://www.swapi.tech/api/people/${i}`)
      .then(response => {
        console.log(response)
        setCharacters([...characters, response.data.result.properties])
      }).catch(error => {
        console.log(error)
      })
    }
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
