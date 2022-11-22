import React from 'react';

const Pagination = ({handlePageChange}) => {
    return (
        <div class="d-flex justify-content-center">
            <div class="btn-group me-2" role="group" aria-label="First group">
                <button onClick={() => handlePageChange('Previous')} type="button" class="btn">Previous</button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
                <button onClick={() => handlePageChange('Next')} type="button" class="btn">Next</button>
            </div>
        </div>
    )
}

export default Pagination;
