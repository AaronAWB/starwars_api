import React from 'react'
import Axios from 'axios'

import Search from './components/Search';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';


function App() {
  return (
    <div className='container'>
      <Search />
      <DataTable />
      <Pagination />
    </div>
  );
}

export default App;
