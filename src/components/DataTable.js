import React from 'react';

const DataTable = ({ characters }) => {

    const tableRow = characters.map(({name, birth_year, height, mass, planet, species}, i) => (
            <tr key={i}>
                <td>{name}</td>
                <td>{birth_year}</td>
                <td>{height}cm</td>
                <td>{mass}kg</td>
                <td>{planet}</td>
                <td>{species}</td>
            </tr>
        )
    );
    
    return (
        <div className='container'>
            <table className='table table-striped table-dark'>
                <thead className='text-center'>
                    <tr>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Homeworld</th>
                        <th>Species</th>
                    </tr>
                </thead>
                <tbody>
                    { tableRow }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;
