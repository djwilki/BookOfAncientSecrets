# BookOfAncientSecrets

<img src=./flask_react_starter/boas_logo.png style="display: flex; width: 50%; margin: auto" /> 

## Welcome to [Book of Ancient Secrets](https://book-of-ancient-secrets.herokuapp.com/), a choose your own adventure portal!

### Here, the wizarding community can find the latest businesses for all of their needs, with reviews and ratings by their peers.

### This site was made using PostgreSQL, Flask, SQLAlchemy, React, & Redux.

### Users can:
* Create new adventures
* Create paths between pages in adventures
* Create and update adventures
* Play through adventures

### Current Adventures Include:
* An excerpt from Treasure Island

### Adventure play feature:
* plain text, soon to be rich text!
* links to other pages
* digital dice tray for accessibility!


---

### Navigating Code:
* All code is written using the Redux framework.
* This code uses the ui slice of state and React conditional rendering to prevent users from manipulating the url to access pages or story elements out of order, or from retracing their footsteps
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

* The ui slice of state also uses localStorage to persist user state between hard refreshes, allowing the user to return to pages with their open content intact

```
export default function uiReducer(state = initialSessionState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_SELECTED_ADVENTURE_ID:
            localStorage.setItem('selectedAdventure', action.adventureId)
            newState.selectedAdventureId = action.adventureId;
            return newState
        case SET_SELECTED_PAGE_ID:
            localStorage.setItem('selectedPage', action.pageId)
            newState.selectedPageId = action.pageId;
            return newState
        default:
            return state;
    }
};
```





### Features to be added:
* Built in character sheets
* Adding links between multiple pages at one time
* Users can upload images
