import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../CSS_MODULES/content_tile.module.css'
import { withRouter } from 'react-router-dom';
import { setSelectedAdventureId, setSelectedPageId } from '../store/ui'

function PlayTile({ tempkey, title, contentId, path, history }) {

    const dispatch = useDispatch()

    const pages = useSelector(state => state.entities.pages)



    const handlePlay = async (e) => {
        e.preventDefault()
        await dispatch(setSelectedAdventureId(contentId))
        const pageId = Object.values(pages).filter(ele => ele.adventureId === contentId).sort((a, b) => {
            return a.id - b.id
        })[0].id
        await dispatch(setSelectedPageId(pageId))
        history.push('/page-view')
    }

    return (
        <div className={styles.tile_container}>
            <div className={styles.tile_title}>
                <h1>{title}</h1>
                <hr></hr>
                <div className={styles.tile_nav}>
                    <button className={styles.tile_link} onClick={handlePlay}>Play</button>
                </div>
            </div>
        </div>
    )
}


export default withRouter(PlayTile)
