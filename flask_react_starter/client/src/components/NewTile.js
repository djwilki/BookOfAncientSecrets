import React from 'react'

function NewTile({ type }) {

    return (
        <>
            <div>
                <h1>New</h1>
                <div>
                    <button>Create New {type.charAt(0).toUpperCase() + type.slice(1)}</button>
                </div>
            </div>
        </>
    )
}

export default NewTile
