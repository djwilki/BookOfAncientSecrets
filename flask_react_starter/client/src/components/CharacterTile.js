import React from 'react'

function CharacterTile ({title}) {

    return (
        <>
            <div>
                <h1>{title}</h1>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </>
    )
}

export default CharacterTile
