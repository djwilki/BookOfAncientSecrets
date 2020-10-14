import React, {useState} from 'react'
import styles from '../CSS_MODULES/adventure_form.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {addAdventure} from '../store/adventures'
import { withRouter } from 'react-router-dom';


function AdventureForm({history}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [checked, setChecked] = useState(false);
    const userId = useSelector(state => state.session.userId)
    // console.log(userId)
    const dispatch = useDispatch()

    const handleClick = async (e) => {
        e.preventDefault()

        let published = 0
        if (checked === 'on') {
            published = 1;
        }
        const res = await dispatch(addAdventure(title, description, published, userId));

        if (res.ok) {
            history.push('/create-adventure')
            return;
        }
    }

    return (
        <div className={styles.page_div}>
            <div className={styles.outermost_form_container}>
                <h1>Create an Adventure</h1>
                <hr className={styles.hr}></hr>
                <h5 className={styles.field_title}>ADVENTURE TITLE</h5>
                <input onChange={(e)=>setTitle(e.target.value)} className={styles.form_title_text} type="text" placeholder="Enter a name" />
                <h5 className={styles.field_title}>DESCRIPTION</h5>
                <textarea onChange={(e)=>setDescription(e.target.value)} className={styles.form_description_textarea}/>
                <div className={styles.checkbox_container}><input type="checkbox" onChange={(e)=>setChecked(e.target.value)}/><span>Publish</span></div>
                <button className={styles.form_button} onClick={handleClick}>Add Adventure</button>
            </div>
        </div>
    )
}

export default withRouter(AdventureForm)
