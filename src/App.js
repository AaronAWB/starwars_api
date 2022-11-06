import React from 'react'
import Axios from 'axios'

import Search from './components/Search';
import Table from './components/Table';
// import Pagination from './components/Pagination';


function App() {
  return (
    <div className='container'>
      <Search />
      <Table />
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
