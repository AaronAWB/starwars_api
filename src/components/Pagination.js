import React from 'react';

const Pagination = ({handlePageChange, firstPage, lastPage}) => {
    return (
        <div class="d-flex justify-content-center">
            <div class="btn-group me-2" role="group" aria-label="First group">
                <button onClick={() => handlePageChange('Previous')} disabled={firstPage ? true : false} type="button" class="btn">Previous Page</button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
                <button onClick={() => handlePageChange('Next')} disabled={lastPage ? true : false} type="button" class="btn">Next Page</button>
            </div>
        </div>
    )
}

export default Pagination;
