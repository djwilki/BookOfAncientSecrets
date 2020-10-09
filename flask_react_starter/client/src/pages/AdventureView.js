import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../CSS_MODULES/adventure_view.module.css'
import PageTile from '../components/PageTile'

function AdventureView (props) {
    console.log(props)
    const selectedAdventureId = useSelector(state => state.session.selectedAdventureId)
    const selectedAdventure = useSelector(state => state.entities.adventures[selectedAdventureId])

    const adventures = useSelector(state => state.entities.adventures)
    const pages = useSelector(state=> state.entities.pages)
    const adventure_pages = Object.values(pages).filter(ele => ele.adventureId === selectedAdventureId)

    const dispatch = useDispatch()

    const tiles = Object.values(adventure_pages).map((ele, idx) => {
        return (
            <li  key={ele.id}>
            <PageTile title={ele.title} contentId={ele.id} path={"/page"} deletePath={"/pages"}/>
            </li>
        )
    })

    return (
        <div className={styles.page_div}>
            <h1 className={styles.adventures_label}>{selectedAdventure.title}</h1>
            <hr></hr>
            <div>{selectedAdventure.description}</div>
            <hr></hr>
            <ul className={styles.tile_list}>
            {tiles}
            </ul>
        </div>
    )
}

export default AdventureView
