import Cookies from 'js-cookie';

const DELETE_LINK = "link/DELETE_LINK"
const CREATE_LINK = "link/CREATE_LINK"
const SET_LINKS = "link/SET_LINK"
const EDIT_LINK = "link/EDIT_LINK"

const deleteLink = (linkId) => {
    return {
        type: DELETE_LINK,
        linkId
    }
}

const createLink = (link) => {
    return {
        type: CREATE_LINK,
        link
    }
}

const getUserLinks = (links) => {
    return {
        type: SET_LINKS,
        links
    }
}

const editLink = (link) => {
    return {
        type: EDIT_LINK,
        link
    }
}

export const addLink = (fromId, toId, text, ownerId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = '/api/links/';
    return async dispatch => {
        const res = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ fromId, toId, text, ownerId, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(createLink(res.data));
        }
        return res;
    }
}


export const setUserLinks = (userId) => {
    // console.log("setting")
    return async dispatch => {
        const res = await fetch(`api/users/${userId}/links`);

        res.data = await res.json();
        // console.log(res.data)
        if (res.ok) {
            dispatch(getUserLinks(res.data));
        }

        return res;
    }
}

export const removeLink = (linkId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path =`api/links/${linkId}`
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
            dispatch(deleteLink(linkId));
        }
    }
}


export const updateLink = (selectedLinkId, toId, text) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `/api/links/${selectedLinkId}`;
    return async dispatch => {
        const res = await fetch(path, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ selectedLinkId, toId, text, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(editLink(res.data));
        }
        return res;
    }
}

export default function linksReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case CREATE_LINK:
            return {...state, [action.link.id]: action.link};
        case SET_LINKS:
            // console.log(newState)
            return action.links;
        case DELETE_LINK:
            delete newState[action.linkId];
            return newState;
        case EDIT_LINK:
            newState[action.link.id] = action.link;
            return newState;
        default:
            return state;
    }
}
