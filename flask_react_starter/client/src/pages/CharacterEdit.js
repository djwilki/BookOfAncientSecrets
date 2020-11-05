import React, { useState } from 'react'
import styles from '../CSS_MODULES/character_form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateCharacter } from '../store/characters'
import { withRouter } from 'react-router-dom';


function CharacterEdit({ history }) {
    const selectedCharacterId = useSelector(state => state.ui.selectedCharacterId)
    const selectedCharacter = useSelector(state => state.entities.characters[selectedCharacterId])
    const [name, setname,] = useState("");
    const [strength, setStrength] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [constitution, setConstitution] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [wisdom, setWisdom] = useState("");
    const [charisma, setCharisma] = useState("");
    const [armorClass, setArmorClass] = useState("");
    const [maxHitpoints, setMaxHitpoints] = useState("");
    const [features, setFeatures] = useState("");
    const [actions, setActions] = useState("");
    const userId = useSelector(state => state.session.userId)
    const dispatch = useDispatch()

    const selectedCharacterId = useSelector(state => state.ui.selectedCharacterId)


    const handleClick = async (e) => {
        e.preventDefault()

        const res = await dispatch(updateCharacter(
            selectedCharacterId,
            name,
            strength,
            dexterity,
            constitution,
            intelligence,
            wisdom,
            charisma,
            armorClass,
            maxHitpoints,
            features,
            actions,
            userId));

        if (res.ok) {
            history.push('/create-character')
            return;
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        history.replace('create-character');
    }

    return (
        <div className={styles.page_div}>
            <div className={styles.outermost_form_container}>
                <h1>Create a Character</h1>
                <hr className={styles.hr}></hr>
                <h5 className={styles.field_title}>CHARACTER NAME</h5>
                <input onChange={(e) => setName(e.target.value)} className={styles.form_title_text} type="text" placeholder="Enter a name" />
                <h5 className={styles.field_title}>ABILITY SCORES</h5>
                <div className={styles.score_container}>
                    <span>Strength Score</span><input type="number" min="0"     placeholder={strength} max="20" onChange={(e) => setStrength(e.target.value)} />
                    <span>Dexterity Score</span><input type="number" min="0"    placeholder={dexterity} max="20" onChange={(e) => setDexterity(e.target.value)} />
                    <span>Constitution Score</span><input type="number" min="0" placeholder={constitution} max="20" onChange={(e) => setConstitution(e.target.value)} />
                    <span>Intelligence Score</span><input type="number" min="0" placeholder={intelligence} max="20" onChange={(e) => setIntelligence(e.target.value)} />
                    <span>Wisdom Score</span><input type="number" min="0"       placeholder={wisdom} max="20" onChange={(e) => setWisdom(e.target.value)} />
                    <span>Charisma Score</span><input type="number" min="0"     placeholder={charisma} max="20" onChange={(e) => setCharisma(e.target.value)} />
                </div>
                <h5>CHARACTER STATISTICS</h5>
                <span>Armor Class</span><input type="number" min="0" max="20" onChange={(e) => setArmorClass(e.target.value)} />
                <span>Maximum Hitpoints</span><input type="number" min="0" max="20" onChange={(e) => setMaxHitpoints(e.target.value)} />
                <button className={styles.form_button} onClick={handleClick}>Add Character</button>
                <button className={styles.form_button} onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default withRouter(CharacterEdit)
