import React from 'react'
import { useDispatch } from 'react-redux';
import styles from '../CSS_MODULES/content_tile.module.css'
import { NavLink, withRouter } from 'react-router-dom';
import { removePage } from '../store/pages'
import {setSelectedPageId} from '../store/session'

function PageTile({ tempkey, title, contentId, path, history }) {

    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault()
        console.log(path)
        await dispatch(removePage(contentId))
    }

    const handleRedirect = async (e) => {
        e.preventDefault()
        await dispatch(setSelectedPageId(contentId))
        history.push('/page-view')
    }

    return (
        <div className={styles.tile_container}>
            <div className={styles.tile_title}>
                <h1>{title}</h1>
                <hr></hr>
                <div className={styles.tile_nav}>
                    <button className={styles.tile_link} onClick={handleRedirect}>View</button>
                    <button className={styles.tile_button} onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(PageTile);