import React from 'react'
import { useDispatch } from 'react-redux';
import styles from '../CSS_MODULES/content_tile.module.css'
import { withRouter } from 'react-router-dom';
import { removeCharacter } from '../store/characters'
import {setSelectedCharacterId} from '../store/ui'

function CharacterTile({ tempkey, title, contentId, path, history }) {

    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(removeCharacter(contentId))
    }

    const handleView = async (e) => {
        e.preventDefault()
        await dispatch(setSelectedCharacterId(contentId))
        history.push('/character-view')
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        await dispatch(setSelectedCharacterId(contentId))
        history.push('/character-edit')
    }


    return (
        <div className={styles.tile_container}>
            <div className={styles.tile_title}>
                <h1>{title}</h1>
                <hr></hr>
                <div className={styles.tile_nav}>
                    <button className={styles.tile_link} onClick={handleView}>View</button>
                    <button className={styles.tile_link} onClick={handleEdit}>Edit</button>
                    <button className={styles.tile_button} onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}


export default withRouter(CharacterTile)
