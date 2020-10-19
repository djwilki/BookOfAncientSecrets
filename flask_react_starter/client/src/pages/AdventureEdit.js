import React, { useState } from 'react'
import styles from '../CSS_MODULES/adventure_form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateAdventure } from '../store/adventures'
import { withRouter } from 'react-router-dom';


function AdventureEdit({ history }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [checked, setChecked] = useState(false);
    // const userId = useSelector(state => state.session.userId)
    const selectedAdventureId = useSelector(state => state.ui.selectedAdventureId)
    // const links = useSelector(state => state.entities.links)
    const adventures = useSelector(state => state.entities.adventures)
    const adventure = adventures[selectedAdventureId]
    // console.log(userId)
    const dispatch = useDispatch()

    const handleClick = async (e) => {
        e.preventDefault()

        let published = 0
        if (checked === 'on') {
            published = 1;
        }
        const res = await dispatch(updateAdventure(selectedAdventureId, title, description, published));

        if (res.ok) {
            history.push('/create-adventure')
            return;
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        history.replace('create-adventure');
    }

    return (
        <div className={styles.page_div}>
            <div className={styles.outermost_form_container}>
                <h1>Create an Adventure</h1>
                <hr></hr>
                <h3>Adventure Title</h3>
                <input onChange={(e) => setTitle(e.target.value)} className={styles.form_title_text} type="text" placeholder="Enter a name" defaultValue={adventure.title}/>
                <h3>Description</h3>
                <textarea onChange={(e) => setDescription(e.target.value)} className={styles.form_description_textarea} defaultValue={adventure.description}/>
                <div><input type="checkbox" onChange={(e) => setChecked(e.target.value)} /><span>Publish</span></div>
                <button className={styles.form_button} onClick={handleClick}>Save Adventure</button>
                <button className={styles.form_button} onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default withRouter(AdventureEdit)
