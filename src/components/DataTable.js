import React from 'react';
import Nanoid from 'nanoid'

const DataTable = () => {
    return(
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
                    <tr key={nanoid()}>
                        {characters.map(characters) => {
                            return (
                            <td>{characters.name}</td>
                            <td>{characters.birth_year}</td>
                            <td>{characters.height} cm</td>
                            <td>{characters.mass} kg</td>
                            <td>{characters.planet}</td>
                            <td>{characters.species}</td>
                        )}};
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;
