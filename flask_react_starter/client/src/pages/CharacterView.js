import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../CSS_MODULES/adventure_view.module.css'
import { setSelectedCharacterId } from '../store/ui'
import StatTile from '../components/StatTile'
function CharacterView({ history }) {
    const selectedCharacterId = useSelector(state => state.ui.selectedCharacterId)
    const selectedCharacter = useSelector(state => state.entities.characters[selectedCharacterId])
    const dispatch = useDispatch()

    const nextCharacter = async (e) => {
        e.preventDefault()
        dispatch(setSelectedCharacterId(Number(e.target.value)))
        return;
    }

    return (
        <div className={styles.page_div}>
            { selectedCharacter ?
                <>
                    <h1 className={styles.adventures_label}>{selectedCharacter.name}</h1>
                    <hr></hr>
                    { selectedCharacter.image ? <img className={styles.view_image} src={selectedCharacter.image}></img> : <></>}
                    <div className={styles.tile_stack}>
                        <StatTile statName="Strength" statValue={selectedCharacter.strength} />
                        <StatTile statName="Dexterity" statValue={selectedCharacter.dexterity} />
                        <StatTile statName="Constitution" statValue={selectedCharacter.constitution} />
                        <StatTile statName="Intelligence" statValue={selectedCharacter.intelligence} />
                        <StatTile statName="Wisdom" statValue={selectedCharacter.wisdom} />
                        <StatTile statName="Charisma" statValue={selectedCharacter.charisma} />
                    </div>
                    <hr></hr>
                    { selectedCharacter.actions.length > 0 ? <><h3>Actions</h3>
                    {selectedCharacter.actions}
                    <hr></hr></> : <></>}

                    { selectedCharacter.features.length > 0 ? <><h3>Features</h3>
                    {selectedCharacter.features}
                    <hr></hr></> : <></>}
                </>
                : <></>}
        </div>
    )
}

export default CharacterView
