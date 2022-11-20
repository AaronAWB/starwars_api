import React from 'react'

const SearchBar = ({handleSearchBarInput, handleSearch}) => {
    return(
        <div className='container search-box-container mb-4 mt-4 align-items-center justify-content-center'>
            <div>
                <input
                    type='text'
                    onChange={handleSearchBarInput}
                >
                </input>
            </div>
            <div>
                <button
                    onClick={handleSearch}
                >Search</button>
            </div>
        </div>
    )
}

export default SearchBar;