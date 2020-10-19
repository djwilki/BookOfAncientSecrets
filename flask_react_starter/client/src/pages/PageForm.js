import React, { useState } from 'react'
import styles from '../CSS_MODULES/adventure_form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addPage } from '../store/pages'
// import {addLink} from '../store/links'
import { withRouter } from 'react-router-dom';


function PageForm({ history }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // const [checked, setChecked] = useState(false);
    // const [linkText, setLinkText] = useState("");
    // const [linkPage, setLinkPage] = useState(null);
    const userId = useSelector(state => state.session.userId)
    const adventureId = useSelector(state => state.ui.selectedAdventureId)
    // const links = useSelector(state => state.entities.links)
    // const pages = useSelector(state => state.entities.pages)

    const dispatch = useDispatch()

    const handleClick = async (e) => {
        e.preventDefault()
        // console.log(title, content, adventureId, userId)
        const res = await dispatch(addPage(title, content, adventureId, userId));

        if (res.ok) {
            history.push('/adventure-view')
            return;
        }
        // console.log(res.errors)
        return res.errors;
    }

    // const handleLink = async (e) => {
    //     e.preventDefault()

    // }

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
                {/* <div><input type="checkbox" onChange={(e) => setChecked(e.target.value)} /><span>Publish</span></div> */}
                {/* <h3>Links</h3>
                <select className={styles.form_title_text} onChange={(e) => setLinkPage(e.target.value)}>
                    {Object.values(pages).map(page => {
                        if (page.adventureId === adventureId) {
                            return <option value={page.id}>{page.title}</option>
                        }
                    })}
                </select>
                <input type="text" placeholder="Enter Link Text" onChange={(e) => setLinkText(e.target.value)} className={styles.form_title_text} />
                <button className={styles.form_button} onClick={handleLink}>Add Link</button> */}
                <button className={styles.form_button} onClick={handleClick}>Add Page</button>
                <button className={styles.form_button} onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default withRouter(PageForm)
