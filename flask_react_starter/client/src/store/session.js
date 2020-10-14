import Cookies from 'js-cookie';

const SET_USER = 'session/SET_USER';
const LOGOUT_USER = 'session/LOGOUT_USER';
const SET_SELECTED_ADVENTURE_ID = 'session/SET_SELECTED_ADVENTURE_ID'
const SET_SELECTED_PAGE_ID = 'session/SET_SELECTED_PAGE_ID'



export const setUser = user => {
    return {
        type: SET_USER,
        user
    }
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

export const setSelectedAdventureId = (adventureId) => {
    return {
        type: SET_SELECTED_ADVENTURE_ID,
        adventureId
    }
}

export const setSelectedPageId = (pageId) => {
    return {
        type: SET_SELECTED_PAGE_ID,
        pageId
    }
}


export const login = (email_or_username, password) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    return async dispatch => {
        const res = await fetch('/api/session/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ email_or_username, password, "csrf_token": csrfToken })
        });
        res.data = await res.json();
        console.log(res.data)
        if (res.ok) {
            dispatch(setUser(res.data.user));
        }
        return res
    }
};

window.login = login;

export const logout = () => {
    const csrfToken = Cookies.get("XSRF-TOKEN");
    return async dispatch => {
        const res = await fetch('/api/session/logout', {
            method: "DELETE",
            headers: {
                "X-CSRFTOKEN": csrfToken
            }
        })
        // console.log(res.data)
        res.data = await res.json();

        if (res.ok) {
            dispatch(logoutUser());
        }
        return res;
    }
}


const initialSessionState = {
    userId: null,
    selectedAdventureId: null,
    selectedPageId: null,
    // defaultNotebookId: null,
    // noteList: null,
    // activeNote: null
}


export default function sessionReducer(state = initialSessionState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_USER:
            newState.userId = action.user.userId;
            newState.username = action.user.username
            return newState;
        case LOGOUT_USER:
            return {};
        case SET_SELECTED_ADVENTURE_ID:
            newState.selectedAdventureId = action.adventureId;
            return newState
        case SET_SELECTED_PAGE_ID:
            newState.selectedPageId = action.pageId;
            return newState
        default:
            return state;
    }
};
