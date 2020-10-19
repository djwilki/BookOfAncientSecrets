# BookOfAncientSecrets

<img src=./flask_react_starter/boas_logo.png style="display: flex; width: 50%; margin: auto" /> 

## Welcome to [Book of Ancient Secrets](https://book-of-ancient-secrets.herokuapp.com/), a choose your own adventure portal!

### Here, the wizarding community can find the latest businesses for all of their needs, with reviews and ratings by their peers.

### This site was made using PostgreSQL, Flask, SQLAlchemy, React, & Redux.

### Users can:
* Create new adventures
* Create paths between pages in adventures
* Create and update adventures
* Play published adventures

### Current Adventures Include:
* An excerpt from Treasure Island

### Adventure play feature:
* plain text, soon to be rich text!
* links to other pages
* digital dice tray for accessibility!


---

### Navigating Code:
* All code is written using the Redux framework.
* This code uses react conditional rendering to prevent users from manipulating the url to access pages or story elements out of order, or from retracing their footsteps
```
const selectedPageId = useSelector(state => state.ui.selectedPageId)
const selectedPage = useSelector(state => state.entities.pages[selectedPageId])
const pageLinks = useSelector(state => Object.values(state.entities.links).filter(ele => ele.fromId === selectedPageId))

const dispatch = useDispatch()
    
const nextPage = async (e) => {
        e.preventDefault()
        dispatch(setSelectedPageId(Number(e.target.value)))
        return;
    }

    return (
        <div className={styles.page_div}>
            { selectedPage ?
                <>
                    <h1 className={styles.adventures_label}>{selectedPage.title}</h1>
                    <hr></hr>
                    <div>{selectedPage.content}</div>
                    <hr></hr>
                    <ul className={styles.link_list}>
                        {pageLinks.map(ele => <li key={ele.id}><button value={ele.toId} className={styles.tile_link} onClick={nextPage}>{ele.text}</button></li>)}
                    </ul>
                </>
                : <></>}
        </div>
    )
```



### Features to be added:
* Built in character sheets
* Adding links between multiple pages at one time
* Users can upload images
