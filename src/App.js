import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import SearchBox from './components/SearchBox';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';



const App = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    const url = "https://swapi.dev/api/people/?page=";
    fetch(url)
      .then ((response) => response.json())
      .then ((json) => setData(json['results']))
      .catch ((error) => console.log(error))
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);


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
