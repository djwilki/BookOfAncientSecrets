import React, {useState} from 'react'
import styles from '../CSS_MODULES/adventure_form.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {addPage} from '../store/pages'
// import {addLink} from '../store/links'
import { withRouter } from 'react-router-dom';


function PageForm({history}) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [checked, setChecked] = useState(false);
    const userId = useSelector(state => state.session.userId)
    const adventureId = useSelector(state => state.session.adventureId)
    // const links = useSelector(state => state.entities.links)
    console.log(userId)
    const dispatch = useDispatch()

    const handleClick = async (e) => {
        e.preventDefault()

        let published = 0
        if (checked === 'on') {
            published = 1;
        }
        const res = await dispatch(addPage(title, content, adventureId, userId));

        if (res.ok) {
            history.push('/')
            return;
        }
    }

    const handleLink = async (e) => {
        e.preventDefault()

    }

    return (
        <div className={styles.page_div}>
            <div className={styles.outermost_form_container}>
                <h1>Create a Page</h1>
                <hr></hr>
                <h3>Page Title</h3>
                <input onChange={(e)=>setTitle(e.target.value)} className={styles.form_title_text} type="text" placeholder="Enter a name" />
                <h3>Description</h3>
                <textarea onChange={(e)=>setContent(e.target.value)} className={styles.form_description_textarea}/>
                <div><input type="checkbox" onChange={(e)=>setChecked(e.target.value)}/><span>Publish</span></div>
                <button className={styles.form_button} onClick={handleClick}>Add Page</button>
            </div>
        </div>
    )
}

export default withRouter(PageForm)
