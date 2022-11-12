import React from 'react'

const SearchBar = () => {
    return(
        <div className='container search-box-container'>
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

export default SearchBox;