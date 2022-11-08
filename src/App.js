import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';
import axios from 'axios';


const App = () => {

  componentDidMount() {
    axios.get(httpAddress)
    .then(response =>{
      console.log(response.data;)
    })
    .catch(error => {
      console.log(error);
    })
  }


  return (
    <div className='container'>
      <h1 className='text-center'>Star Wars API Search</h1>
      <SearchBar />
      <DataTable />
      <Pagination />
    </div>
  );
}

export default App;
