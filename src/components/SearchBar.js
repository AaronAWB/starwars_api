import React from 'react'

const SearchBar = ({handleSearchBarInput, handleSearch, clearSearch, searchParameter}) => {
    return(
        <div className='container search-bar-container mb-4 mt-4 justify-content-center row'>
            <div className='col-6'>
                <input
                    type='text'
                    placeholder='Search by character name...'
                    className='form-control input-lg'
                    onChange={handleSearchBarInput}
                    value={searchParameter}
                >
                </input>
            </div>
            <div className ='col-1'>
                <button
                    className='btn'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div className ='col-1'>
                <button
                    className='btn'
                    onClick={clearSearch}
                >
                    Clear
                    </button>
            </div>
        </div>
    )
}

export default SearchBar;