import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../CSS_MODULES/adventure_view.module.css'
import { setSelectedCharacterId } from '../store/ui'

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
                    <div>
                        <div>Strength<span></span>{selectedCharacter.strength} {Math.floor((selectedCharacter.strength-10)/2)}</div>
                        <div>Dexterity<span></span>{selectedCharacter.dexterity} {Math.floor((selectedCharacter.dexterity-10)/2)}</div>
                        <div>Constitution<span></span>{selectedCharacter.constitution} {Math.floor((selectedCharacter.constitution-10)/2)}</div>
                        <div>Intelligence<span></span>{selectedCharacter.intelligence} {Math.floor((selectedCharacter.intelligence-10)/2)}</div>
                        <div>Wisdom<span></span>{selectedCharacter.wisdom} {Math.floor((selectedCharacter.wisdom-10)/2)}</div>
                        <div>Charisma<span></span>{selectedCharacter.charisma} {Math.floor((selectedCharacter.charisma-10)/2)}</div>
                    </div>
                    <hr></hr>
                    <h3>Actions</h3>
                    {selectedCharacter.actions}
                    <hr></hr>
                    <h3>Features</h3>
                    <hr></hr>
                </>
                : <></>}
        </div>
    )
}

export default CharacterView
