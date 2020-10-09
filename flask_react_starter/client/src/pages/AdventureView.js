import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../CSS_MODULES/adventure_view.module.css'

function AdventureView (props) {
    console.log(props)
    const selectedAdventureId = useSelector(state => state.session.selectedAdventureId)
    const selectedAdventure = useSelector(state => state.entities.adventures[selectedAdventureId])

    const dispatch = useDispatch()

    return (
        <div className={styles.page_div}>
            <h1 className={styles.adventures_label}>{selectedAdventure.title}</h1>
            <hr></hr>
            <div>{selectedAdventure.description}</div>
            <hr></hr>
        </div>
    )
}

export default AdventureView
