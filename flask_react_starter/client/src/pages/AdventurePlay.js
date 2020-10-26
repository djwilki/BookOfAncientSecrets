import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PlayTile from '../components/PlayTile'
import { setUserAdventures } from '../store/adventures'
import { setUserPages } from '../store/pages'
import {setUserLinks} from '../store/links'
import styles from '../CSS_MODULES/create_adventure.module.css'


function AdventurePlay(props) {
    const userId = useSelector(state => state.session.userId)
    const adventures = useSelector(state => state.entities.adventures)


    const dispatch = useDispatch()

    useEffect(() => {
        const getAdventures = async () => {
            await dispatch(setUserAdventures(userId));
        }
        getAdventures()

        const getPages = async () => {
            await dispatch(setUserPages(userId));
        }
        getPages()

        const getLinks = async () => {
            await dispatch(setUserLinks(userId));
        }
        getLinks()

    }, [dispatch, userId])



    const tiles = Object.values(adventures).map((ele, idx) => {
        return (
            <li  key={ele.id}>
            <PlayTile title={ele.title} contentId={ele.id} path={"/adventure"} deletePath={"/adventures"}/>
            </li>
        )
    })


    return (
        <div className={styles.page_div}>
            <h1 className={styles.adventures_label}>Your Adventures</h1>
            <hr></hr>
            <h3>Playable Adventures</h3>
            <div>Published adventures are available to you for play!</div>
            <ul className={styles.tile_list}>
            {tiles}
            </ul>
        </div>
    )
}


export default AdventurePlay;
