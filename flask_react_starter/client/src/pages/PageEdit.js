import React, { useState } from 'react'
import styles from '../CSS_MODULES/adventure_form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updatePage } from '../store/pages'
import { addLink, removeLink } from '../store/links'
import { withRouter } from 'react-router-dom';


function PageEdit({ history }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // const [checked, setChecked] = useState(false);
    const [linkText, setLinkText] = useState("");
    const [linkPage, setLinkPage] = useState(null);
    const userId = useSelector(state => state.session.userId)
    const adventureId = useSelector(state => state.ui.selectedAdventureId)
    const selectedPageId = useSelector(state => state.ui.selectedPageId)
    const links = useSelector(state => state.entities.links)
    const pages = useSelector(state => state.entities.pages)
    const page = pages[selectedPageId]

    const dispatch = useDispatch()

    const handleClick = async (e) => {
        e.preventDefault()
        // console.log(title, content, adventureId, userId)
        const res = await dispatch(updatePage(selectedPageId, title, content));
        if (res.ok) {
            history.push('/adventure-view')
            return;
        }
        // console.log(res.errors)
        return res.errors;
    }

    const handleLink = async (e) => {
        e.preventDefault()
        // console.log(page.id, linkPage, linkText, userId)
        const res = await (dispatch(addLink(Number(page.id), Number(linkPage), linkText, userId)))
        if (res.ok) {
            return;
        }
    }

    const deleteLink = async (e) => {
        e.preventDefault()
        const res = await (dispatch(removeLink(e.target.value)))
        // if (res.ok) {
        //     return;
        // }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        history.replace('adventure-view');
    }

    return (
        <div className={styles.page_div}>
            {page ? <>
                <div className={styles.outermost_form_container}>
                    <h1>Create a Page</h1>
                    <hr></hr>
                    <h3>Page Title</h3>
                    <input onChange={(e) => setTitle(e.target.value)} className={styles.form_title_text} type="text" placeholder="Enter a name" defaultValue={page.title} />
                    <h3>Content</h3>
                    <textarea onChange={(e) => setContent(e.target.value)} className={styles.form_description_textarea} defaultValue={page.content} />
                    <h3>Links</h3>
                    <ul className={styles.link_list}>
                        {Object.values(links).filter((ele2) => ele2.fromId === selectedPageId).map((ele, idx) => {
                            return (<li key={ele.id.toString()} className={styles.link_item}>
                                <span className={styles.link_item_link}>{ele.text}</span>
                                <button className={styles.link_button_delete} value={ele.id} onClick={deleteLink}> Remove </button>
                            </li>)
                        })}
                    </ul>
                    <select className={styles.form_title_text} defaultValue={'DEFAULT'} onChange={(e) => setLinkPage(e.target.value)}>
                        <option key={"0"} disabled value={'DEFAULT'}> -- select a page -- </option>
                        {Object.values(pages).map(page => {
                            if (page.adventureId === adventureId &&
                                page.id !== selectedPageId &&
                                !Object.values(links).filter(ele => ele.fromId === selectedPageId).map(ele => {
                                    return ele.toId
                                }).includes(page.id)) {
                                return <option key={page.id} value={Number(page.id)}>{page.title}</option>
                            }
                            return "";
                        })}
                    </select>
                    <input type="text" placeholder="Enter Link Text" onChange={(e) => setLinkText(e.target.value)} className={styles.form_title_text} />
                    <button className={styles.form_button} onClick={handleLink}>Add Link</button>
                    <button className={styles.form_button} onClick={handleClick}>Save Page</button>
                    <button className={styles.form_button} onClick={handleCancel}>Cancel</button>
                </div>
            </> : <></>}
        </div>
    )
}

export default withRouter(PageEdit)
