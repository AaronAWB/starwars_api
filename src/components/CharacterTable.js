import React from 'react';

const CharacterTable = ({ characters, loading }) => {

    if(loading) {
        return <h2>Loading...</h2>
    }
 
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
                <tbody className='text-center'>
                    {characters.map((character, i) => {
                        return(
                            <tr key={i}>
                                <td>{character.name}</td>
                                <td>{character.birth_year}</td>
                                <td>{character.height}cm</td>
                                <td>{character.mass}kg</td>
                                <td>{character.homeworld}</td>
                                <td>{character.species}</td>
                            </tr>
                            )
                     })}
                </tbody>
            </table>
        </div>
    )
}

export default CharacterTable;
