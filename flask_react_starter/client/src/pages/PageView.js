import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../CSS_MODULES/adventure_view.module.css'
import PageTile from '../components/PageTile'

function PageView (props) {
    console.log(props)
    const selectedPageId = useSelector(state => state.session.selectedPageId)
    const selectedPage = useSelector(state => state.entities.pages[selectedPageId])


    const dispatch = useDispatch()


    return (
        <div className={styles.page_div}>
            <h1 className={styles.adventures_label}>{selectedPage.title}</h1>
            <hr></hr>
            <div>{selectedPage.content}</div>
            <hr></hr>
        </div>
    )
}

export default PageView
