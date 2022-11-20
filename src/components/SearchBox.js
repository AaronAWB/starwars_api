import React from 'react'

const SearchBox = () => {
    return(
        <div className='container search-box-container mb-4 mt-4 align-items-center justify-content-center'>
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