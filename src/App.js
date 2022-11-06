import React from 'react'
import Axios from 'axios'

import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';


const App = () => {
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
