import React from 'react';

const Pagination = ({handlePageChange}) => {
    return (
        <nav aria-label='Page navigation container mt-4 align-items-center justify-content-center'>
            <ul className='pagination'>
                <li onClick={() => handlePageChange('previous')} class="page-item"><a class="page-link">Previous</a></li>
                <li onClick={() => handlePageChange(1)} class="page-item"><a class="page-link">1</a></li>
                <li onClick={() => handlePageChange(2)} class="page-item"><a class="page-link">2</a></li>
                <li onClick={() => handlePageChange(3)} class="page-item"><a class="page-link">3</a></li>
                <li onClick={() => handlePageChange(4)} class="page-item"><a class="page-link">4</a></li>
                <li onClick={() => handlePageChange(5)} class="page-item"><a class="page-link">5</a></li>
                <li onClick={() => handlePageChange(6)} class="page-item"><a class="page-link">6</a></li>
                <li onClick={() => handlePageChange(7)} class="page-item"><a class="page-link">7</a></li>
                <li onClick={() => handlePageChange(8)} class="page-item"><a class="page-link">8</a></li>
                <li onClick={() => handlePageChange(9)} class="page-item"><a class="page-link">9</a></li>
                <li onClick={() => handlePageChange('next')} class="page-item"><a class="page-link">Next</a></li>
            </ul>
        </nav>
    )
}

export default Pagination;