import React from 'react'
import { useDispatch } from 'react-redux';
import styles from '../CSS_MODULES/content_tile.module.css'
import { NavLink, withRouter } from 'react-router-dom';
import { removeAdventure } from '../store/adventures'
import {setSelectedAdventureId} from '../store/session'

function AdventureTile({ tempkey, title, contentId, path, history }) {

    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(removeAdventure(contentId))
    }

    const handleRedirect = async (e) => {
        e.preventDefault()
        await dispatch(setSelectedAdventureId(contentId))
        history.push('/adventure-view')
    }

    return (
        <div className={styles.tile_container}>
            <div className={styles.tile_title}>
                <h1>{title}</h1>
                <hr></hr>
                <div className={styles.tile_nav}>
                    {/* <NavLink className={styles.tile_link} to={`/adventure-view`}> View </NavLink> */}
                    <button className={styles.tile_link} onClick={handleRedirect}>View</button>
                    <button className={styles.tile_button} onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}


export default withRouter(AdventureTile)