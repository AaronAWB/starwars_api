import React from 'react';

const DataTable = ({ characters }) => {

    const characterData = characters.map((character, i) => {
        return (
            <tr key={i}>
                <td>{characterData.name}</td>
                <td>{characterData.birth_year}</td>
                <td>{characterData.height}</td>
                <td>{characterData.mass}</td>
                <td>{characterData.planet}</td>
                <td>{characterData.species}</td>
            </tr>
        )
    })
 
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
                    {characterData}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;
