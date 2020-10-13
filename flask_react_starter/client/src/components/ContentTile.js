import React from 'react'
import { useDispatch } from 'react-redux';
import styles from '../CSS_MODULES/content_tile.module.css'
import { NavLink } from 'react-router-dom';
import { removeAdventure } from '../store/adventures'

function ContentTile({ tempkey, title, contentId, path }) {

    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault()
        // console.log(path)
        if (path === "/adventure") {
             await dispatch(removeAdventure(contentId))
        }
    }

    return (
        <div className={styles.tile_container}>
            <div className={styles.tile_title}>
                <h1>{title}</h1>
                <hr></hr>
                <div className={styles.tile_nav}>
                    <NavLink className={styles.tile_link} to={`${path}/${contentId}`}> View </NavLink>
                    <button className={styles.tile_button} onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ContentTile
