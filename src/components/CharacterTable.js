import React from 'react';

const CharacterTable = ({ characters, loading }) => {

    const renderCharacterTable = () => {
        return characters.map((character, i) => {
            return(
                <tr key={i}>
                    <td>{character.name}</td>
                    <td>{character.birth_year}</td>
                    <td>{character.height} cm</td>
                    <td>{character.mass} kg</td>
                    <td>{character.homeworld}</td>
                    <td>{character.species}</td>
                </tr>
                )
        })
    }

    if(loading) {
        return (
            <div className="loading-container d-flex justify-content-center">
                <div className="spinner-border mr-8" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h3 className='loading-text'>Loading...</h3>
            </div>
            )
        } else {
            renderCharacterTable();
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
                    {renderCharacterTable()}
                </tbody>
            </table>
        </div>
    )
}

export default CharacterTable;
