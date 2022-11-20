import React from 'react'

const SearchBox = ({handleSearchBarInput}) => {
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
                <button>Search</button>
            </div>
        </div>
    )
}

export default SearchBox;