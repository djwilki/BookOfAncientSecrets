import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../CSS_MODULES/adventure_view.module.css'
import {setSelectedPageId} from '../store/session'
// import PageTile from '../components/PageTile'

function PageView({history}) {
    // console.log(props)
    const selectedPageId = useSelector(state => state.session.selectedPageId)
    const selectedPage = useSelector(state => state.entities.pages[selectedPageId])
    const pageLinks = useSelector(state => Object.values(state.entities.links).filter(ele => ele.fromId === selectedPageId))

    const dispatch = useDispatch()

    const nextPage = async (e) => {
        e.preventDefault()
        dispatch(setSelectedPageId(Number(e.target.value)))
        return;
    }

    return (
        <div className={styles.page_div}>
            <h1 className={styles.adventures_label}>{selectedPage.title}</h1>
            <hr></hr>
            <div>{selectedPage.content}</div>
            <hr></hr>
            <ul className={styles.link_list}>
                {pageLinks.map(ele => <li key={ele.id}><button value={ele.toId} onClick={nextPage}>{ele.text}</button></li>)}
            </ul>
        </div>
    )
}

export default PageView
