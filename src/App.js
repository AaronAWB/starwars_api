import React from 'react'
import Axios from 'axios'

import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';


function App() {
  return (
    <div className='container'>
      <SearchBar />
      <DataTable />
      <Pagination />
    </div>
  );
}

export default App;
