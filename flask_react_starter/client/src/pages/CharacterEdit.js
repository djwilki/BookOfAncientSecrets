import React, {useState} from 'react'
import styles from '../CSS_MODULES/character_form.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {addCharacter} from '../store/characters'
import { withRouter } from 'react-router-dom';


function CharacterEdit({history}) {

    const [name, setName] = useState("");
    const [strength, setStrength] = useState(null);
    const [dexterity, setDexterity] = useState(null);
    const [constitution, setConstitution] = useState(null);
    const [intelligence, setIntelligence] = useState(null);
    const [wisdom, setWisdom] = useState(null);
    const [charisma, setCharisma] = useState(null);
    const [armorClass, setArmorClass] = useState(null);
    const [maxHitpoints, setMaxHitpoints] = useState(null);
    const [features, setFeatures] = useState("");
    const [actions, setActions] = useState("");
    const userId = useSelector(state => state.session.userId)
    const dispatch = useDispatch()

    const handleClick = async (e) => {
        e.preventDefault()

        const res = await dispatch(addCharacter(
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
                <input onChange={(e)=>setName(e.target.value)} className={styles.form_title_text} type="text" placeholder="Enter a name" />
                <h5 className={styles.field_title}>ABILITY SCORES</h5>
                <div className={styles.score_container}>
                    <span>Strength Score</span><input type="number" min="0" max="20" onChange={(e)=>setStrength(e.target.value)}/>
                    <span>Dexterity Score</span><input type="number" min="0" max="20" onChange={(e)=>setDexterity(e.target.value)}/>
                    <span>Constitution Score</span><input type="number" min="0" max="20" onChange={(e)=>setConstitution(e.target.value)}/>
                    <span>Intelligence Score</span><input type="number" min="0" max="20" onChange={(e)=>setIntelligence(e.target.value)}/>
                    <span>Wisdom Score</span><input type="number" min="0" max="20" onChange={(e)=>setWisdom(e.target.value)}/>
                    <span>Charisma Score</span><input type="number" min="0" max="20" onChange={(e)=>setCharisma(e.target.value)}/>
                </div>
                <h5>CHARACTER STATISTICS</h5>
                <span>Armor Class</span><input type="number" min="0" max="20" onChange={(e)=>setArmorClass(e.target.value)}/>
                <span>Maximum Hitpoints</span><input type="number" min="0" max="20" onChange={(e)=>setMaxHitpoints(e.target.value)}/>
                <button className={styles.form_button} onClick={handleClick}>Add Character</button>
                <button className={styles.form_button} onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default withRouter(CharacterEdit)
