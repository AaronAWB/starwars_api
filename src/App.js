import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import SearchBox from './components/SearchBox';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';
import axios from 'axios';



const App = () => {

  const [characters, setCharacters] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const getCharacterData = () => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res)
      setCharacters([...characters, res.name])
    }).catch(err => {
      console.log(err)
    })
   
  };
    
  // useEffect(() => {
  //   if (characterData.length !== 0) {
  //     setIsLoading(false);
  //   }
  //   console.log(data);
  // }, [data]);


  return (
    <div className='container'>
      <h1 className='text-center'>Star Wars API Search</h1>
      <SearchBox />
      <DataTable />
      <Pagination />
    </div>
  );
}

export default App;
