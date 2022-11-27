import React from 'react';

const Pagination = ({handlePageChange, currentPage, lastPageNumber, lastPage}) => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="btn-group me-2" role="group" aria-label="Next page button">
                    <button onClick={() => handlePageChange('Previous')} disabled={currentPage === 1 ? true : false} type="button" class="btn">Back</button>
                </div>
                <div className="btn-group" role="group" aria-label="Previos page button">
                    <button onClick={() => handlePageChange('Next')} disabled={lastPage ? true : false} type="button" class="btn">Next</button>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
                <h6>{currentPage} of {lastPageNumber}</h6>
            </div>
        </div>
    )
}

export default Pagination;
