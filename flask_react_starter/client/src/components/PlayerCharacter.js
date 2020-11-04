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
                        <div>
                            <span>Strength Score</span>{selectedCharacter.strength}
                            <span>Strength Modifier</span>{Math.floor((selectedCharacter.strength - 10) / 2) > 0 ? "+" : ""}{Math.floor((selectedCharacter.strength - 10) / 2)}
                        </div>
                        <div><span>Dexterity</span>{selectedCharacter.dexterity} <span>Dexterity Modifier</span>{Math.floor((selectedCharacter.dexterity - 10) / 2) > 0 ? "+" : ""}{Math.floor((selectedCharacter.dexterity - 10) / 2)}</div>
                        <div><span>Constitution</span>{selectedCharacter.constitution} <span>Constitution Modifier</span>{Math.floor((selectedCharacter.constitution - 10) / 2) > 0 ? "+" : ""}{Math.floor((selectedCharacter.constitution - 10) / 2)}</div>
                        <div><span>Intelligence</span>{selectedCharacter.intelligence} <span>Intelligence Modifier</span>{Math.floor((selectedCharacter.intelligence - 10) / 2) > 0 ? "+" : ""}{Math.floor((selectedCharacter.intelligence - 10) / 2)}</div>
                        <div><span>Wisdom</span>{selectedCharacter.wisdom} <span>Wisdom Modifier</span>{Math.floor((selectedCharacter.wisdom - 10) / 2) > 0 ? "+" : ""}{Math.floor((selectedCharacter.wisdom - 10) / 2)}</div>
                        <div><span>Charisma</span>{selectedCharacter.charisma} <span>Charisma Modifier</span>{Math.floor((selectedCharacter.charisma - 10) / 2) > 0 ? "+" : ""}{Math.floor((selectedCharacter.charisma - 10) / 2)}</div>
                    </div>
                    <hr></hr>
                    <h3>Actions</h3>
                    {selectedCharacter.actions}
                    <hr></hr>
                    <h3>Features</h3>
                    {selectedCharacter.features}
                    <hr></hr>
                </>
                : <></>}
        </div>
    )
}

export default CharacterView
