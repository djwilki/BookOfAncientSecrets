import React, { useState } from 'react'
import styles from '../CSS_MODULES/adventure_form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addPage } from '../store/pages'
// import {addLink} from '../store/links'
import { withRouter } from 'react-router-dom';


function PageForm({ history }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const userId = useSelector(state => state.session.userId)
    const adventureId = useSelector(state => state.ui.selectedAdventureId)


    const dispatch = useDispatch()

    const handleClick = async (e) => {
        e.preventDefault()

        const res = await dispatch(addPage(title, content, adventureId, userId));

        if (res.ok) {
            history.push('/adventure-view')
            return;
        }
        return res.errors;
    }


    const handleCancel = (e) => {
        e.preventDefault()
        history.replace('adventure-view');
    }

    return (
        <div className={styles.page_div}>
            <div className={styles.outermost_form_container}>
                <h1>Create a Page</h1>
                <hr className={styles.hr}></hr>
                <h3>PAGE TITLE</h3>
                <input onChange={(e) => setTitle(e.target.value)} className={styles.form_title_text} type="text" placeholder="Enter a name" />
                <h3>CONTENT</h3>
                <textarea onChange={(e) => setContent(e.target.value)} className={styles.form_description_textarea} />
                <button className={styles.form_button} onClick={handleClick}>Add Page</button>
                <button className={styles.form_button} onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default withRouter(PageForm)
