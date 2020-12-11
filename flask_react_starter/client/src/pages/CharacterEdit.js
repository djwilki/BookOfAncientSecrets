import React, { useState } from 'react'
import styles from '../CSS_MODULES/character_form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateCharacter } from '../store/characters'
import { withRouter } from 'react-router-dom';


function CharacterEdit({ history }) {
    const selectedCharacterId = useSelector(state => state.ui.selectedCharacterId)
    const selectedCharacter = useSelector(state => state.entities.characters[selectedCharacterId])
    console.log(selectedCharacter)
    const [name, setName,] = useState(selectedCharacter['name']);
    const [strength, setStrength] = useState(selectedCharacter['strength']);
    const [dexterity, setDexterity] = useState(selectedCharacter['dexterity']);
    const [constitution, setConstitution] = useState(selectedCharacter['constitution']);
    const [intelligence, setIntelligence] = useState(selectedCharacter['intelligence']);
    const [wisdom, setWisdom] = useState(selectedCharacter['wisdom']);
    const [charisma, setCharisma] = useState(selectedCharacter['charisma']);
    const [armorClass, setArmorClass] = useState(selectedCharacter['armorClass']);
    const [maxHitpoints, setMaxHitpoints] = useState(selectedCharacter['maxHitpoints']);
    const [features, setFeatures] = useState(selectedCharacter['features']);
    const [actions, setActions] = useState(selectedCharacter['actions']);
    const userId = useSelector(state => state.session.userId)
    const dispatch = useDispatch()


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
                <hr></hr>
                <input onChange={(e) => setName(e.target.value)} className={styles.form_title_text} type="text" placeholder={name} />
                <h5 className={styles.field_title}>ABILITY SCORES</h5>
                <hr></hr>
                <div className={styles.score_list}>
                    <div className={styles.score_container}>
                        <div>Strength Score</div><input type="number" min="0" placeholder={strength} max="20" onChange={(e) => setStrength(e.target.value)} />
                    </div>
                    <div className={styles.score_container}>
                        <div>Dexterity Score</div><input type="number" min="0" placeholder={dexterity} max="20" onChange={(e) => setDexterity(e.target.value)} />
                    </div>
                    <div className={styles.score_container}>
                        <div>Constitution Score</div><input type="number" min="0" placeholder={constitution} max="20" onChange={(e) => setConstitution(e.target.value)} />
                    </div>
                    <div className={styles.score_container}>
                        <div>Intelligence Score</div><input type="number" min="0" placeholder={intelligence} max="20" onChange={(e) => setIntelligence(e.target.value)} />
                    </div>
                    <div className={styles.score_container}>
                        <div>Wisdom Score</div><input type="number" min="0" placeholder={wisdom} max="20" onChange={(e) => setWisdom(e.target.value)} />
                    </div>
                    <div className={styles.score_container}>
                        <div>Charisma Score</div><input type="number" min="0" placeholder={charisma} max="20" onChange={(e) => setCharisma(e.target.value)} />
                    </div>
                </div>
                <h5>CHARACTER STATISTICS</h5>
                <hr></hr>
                <div className={styles.score_container}>
                    <div>Armor Class</div><input type="number" min="0" max="20" placeholder={armorClass} onChange={(e) => setArmorClass(e.target.value)} />
                    <div>Maximum Hitpoints</div><input type="number" min="0" max="20" placeholder={maxHitpoints} onChange={(e) => setMaxHitpoints(e.target.value)} />
                </div>

                <button className={styles.form_button} onClick={handleClick}>Add Character</button>
                <button className={styles.form_button} onClick={handleCancel}>Cancel</button>
            </div>
        </div >
    )
}

export default withRouter(CharacterEdit)
