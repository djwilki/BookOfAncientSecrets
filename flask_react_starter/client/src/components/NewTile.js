import React from 'react'
import styles from '../CSS_MODULES/content_tile.module.css'
import { NavLink } from 'react-router-dom';

function NewTile({type}) {

    return (
        <div className={styles.tile_container}>
            <div className={styles.tile_title}>
                <h1>New</h1>
                <hr></hr>
                <div className={styles.tile_nav}>
                    <NavLink className={styles.tile_link} to={`/${type}-form`}> Create New </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NewTile
