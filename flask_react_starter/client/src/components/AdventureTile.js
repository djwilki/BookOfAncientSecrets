import React from 'react'
import { useDispatch } from 'react-redux';
import styles from '../CSS_MODULES/content_tile.module.css'
import { withRouter } from 'react-router-dom';
import { removeAdventure } from '../store/adventures'
import {setSelectedAdventureId} from '../store/ui'

function AdventureTile({ tempkey, title, contentId, path, history }) {

    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault()
        const res = await dispatch(removeAdventure(contentId))
        return res.ok
    }

    const handleView = async (e) => {
        e.preventDefault()
        const res = await dispatch(setSelectedAdventureId(contentId))
        history.push('/adventure-view')
        return res.ok
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        const res = await dispatch(setSelectedAdventureId(contentId))
        history.push('/adventure-edit')
        return res.ok
    }


    return (
        <div className={styles.tile_container}>
            <div className={styles.tile_title}>
                <h1>{title}</h1>
                <hr></hr>
                <div className={styles.tile_nav}>
                    {/* <NavLink className={styles.tile_link} to={`/adventure-view`}> View </NavLink> */}
                    <button className={styles.tile_link} onClick={handleView}>View</button>
                    <button className={styles.tile_link} onClick={handleEdit}>Edit</button>
                    <button className={styles.tile_button} onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}


export default withRouter(AdventureTile)
