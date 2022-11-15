import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import SearchBox from './components/SearchBox';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    Axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log(res)
        setCharacters([...characters, res.data.results])
      }).catch(err => {
        console.log(err)
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
      <DataTable characters={ characters }/>
      <Pagination />
    </div>
  );
}

export default App;
