import React from 'react'

const SearchBar = ({handleSearchBarInput, handleSearch, clearSearch}) => {
    return(
        <div className='container search-bar-container mb-4 mt-4 justify-content-center row'>
            <div className='col-4'>
                <input
                    type='text'
                    placeholder='Search by character name...'
                    className='form-control input-lg'
                    onChange={handleSearchBarInput}
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
                <button
                    className='btn'
                    onClick={clearSearch}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar;