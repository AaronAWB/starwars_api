import React from 'react'

const SearchBar = () => {
    return(
        <div className='container search-bar-container'>
            <div>
                <input
                    type='text'
                >
                </input>
            </div>
            <div>
                <button>Search</button>
            </div>
        </div>
    )
}

export default SearchBar;