import Cookies from 'js-cookie';

const CREATE_ADVENTURE = "adventure/CREATE_ADVENTURE"
const SET_ADVENTURES = 'adventure/SET_USER_ADVENTURES'
const DELETE_ADVENTURE = "adventure/DELETE_ADVENTURE"
const EDIT_ADVENTURE = "adventure/EDIT_ADVENTURE"

const deleteAdventure = (adventureId) => {
    return {
        type: DELETE_ADVENTURE,
        adventureId
    }
}

const getUserAdventures = (adventures) => {
    return {
        type: SET_ADVENTURES,
        adventures
    }
}


const createAdventure = (adventure) => {
    return {
        type: CREATE_ADVENTURE,
        adventure
    }
}

const editAdventure = adventure => {
    return {
        type: EDIT_ADVENTURE,
        adventure
    }
}

export const addAdventure = (title, description, published, ownerId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = '/api/adventures/';
    return async dispatch => {
        const res = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ title, description, published, ownerId, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(createAdventure(res.data));
        }
        return res;
    }
}

export const setUserAdventures = (userId) => {
    // console.log("setting")
    return async dispatch => {
        const res = await fetch(`api/users/${userId}/adventures`);

        res.data = await res.json();
        // console.log(res.data)
        if (res.ok) {
            dispatch(getUserAdventures(res.data));
        }

        return res;
    }
}

export const removeAdventure = (adventureId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path =`api/adventures/${adventureId}`
    return async dispatch => {
        const res = await fetch(path, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
        });

        res.data = await res.json();
        // console.log(res.data)
        if (res.ok) {
            dispatch(deleteAdventure(adventureId));
        }
    }
}

export const updateAdventure = (selectedAdventureId, title, description, published) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `/api/adventures/${selectedAdventureId}`;
    return async dispatch => {
        const res = await fetch(path, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ selectedAdventureId, title, description, published, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(editAdventure(res.data));
        }
        return res;
    }
}

export default function adventuresReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case CREATE_ADVENTURE:
            return {...state, [action.adventure.id]: action.adventure};
        case SET_ADVENTURES:
            // console.log(newState)
            return action.adventures;
        case DELETE_ADVENTURE:
            delete newState[action.adventureId];
            return newState;
        case EDIT_ADVENTURE:
            newState[action.adventure.id] = action.adventure;
            return newState;
        default:
            return state;
    }
}
