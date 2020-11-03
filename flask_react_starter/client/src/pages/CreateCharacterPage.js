import React from 'react'
import ContentTile from '../components/ContentTile'
import { useSelector } from 'react-redux'
import CharacterTile from '../components/CharacterTile'
import NewTile from '../components/NewTile'
import styles from '../CSS_MODULES/create_adventure.module.css'
function CreateCharacterPage(props) {
    const userId = useSelector(state => state.session.userId)
    const characters = useSelector(state => state.entities.characters)

    const tiles = Object.values(characters).map((ele, idx) => {
        return (
            <li key={ele.id}>
                <CharacterTile title={ele.name} contentId={ele.id} path={"/character"} deletePath={"/characters"} />
            </li>
        )
    })

    return (
        <div className={styles.page_div}>
            <h1 className={styles.adventures_label}>Your Characters</h1>
            <hr></hr>
            <div>
            <ul className={styles.tile_list}>
            {tiles}
            <NewTile type="character" />
            </ul>

            </div>
        </div>
    )
}

export default CreateCharacterPage
