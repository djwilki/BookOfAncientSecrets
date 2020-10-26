import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../CSS_MODULES/adventure_view.module.css'
import PageTile from '../components/PageTile'
import NewTile from '../components/NewTile'

function AdventureView (props) {
    const selectedAdventureId = useSelector(state => state.ui.selectedAdventureId)
    const selectedAdventure = useSelector(state => state.entities.adventures[selectedAdventureId])
    const userId = useSelector(state => state.session.userId)
    const pages = useSelector(state=> state.entities.pages)
    const adventure_pages = Object.values(pages).filter(ele => ele.adventureId === selectedAdventureId)

    const tiles = Object.values(adventure_pages).map((ele, idx) => {
        return (
            <li  key={ele.id}>
            <PageTile title={ele.title} userId={userId} contentId={ele.id} path={"/page"} deletePath={"/pages"}/>
            </li>
        )
    })

    return (
        <div className={styles.page_div}>
            { selectedAdventure ?
            <>
            <h1 className={styles.adventures_label}>{selectedAdventure.title}</h1>
            <hr></hr>
            <div>{selectedAdventure.description}</div>
            <hr></hr>
            <ul className={styles.tile_list}>
            {tiles}
            <NewTile type="page" />
            </ul>
            </>
            : <></>}
        </div>
    )
}

export default AdventureView
