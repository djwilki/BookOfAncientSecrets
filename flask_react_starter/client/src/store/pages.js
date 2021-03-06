import Cookies from 'js-cookie';

const DELETE_PAGE = "page/DELETE_PAGE"
const CREATE_PAGE = "page/CREATE_PAGE"
const SET_PAGES = "page/SET_PAGE"
const EDIT_PAGE = "page/EDIT_PAGE"

const deletePage = (pageId) => {
    return {
        type: DELETE_PAGE,
        pageId
    }
}

const createPage = (page) => {
    return {
        type: CREATE_PAGE,
        page
    }
}

const getUserPages = (pages) => {
    return {
        type: SET_PAGES,
        pages
    }
}

const editPage = (page) => {
    return {
        type: EDIT_PAGE,
        page
    }
}

export const addPage = (title, content, adventureId, ownerId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = '/api/pages/';
    return async dispatch => {
        const res = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ title, content, adventureId, ownerId, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(createPage(res.data));
        }
        return res;
    }
}


export const setUserPages = (userId) => {
    // console.log("setting")
    return async dispatch => {
        const res = await fetch(`api/users/${userId}/pages`);

        res.data = await res.json();
        // console.log(res.data)
        if (res.ok) {
            dispatch(getUserPages(res.data));
        }

        return res;
    }
}

export const removePage = (pageId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path =`api/pages/${pageId}`
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
            dispatch(deletePage(pageId));
        }
    }
}


export const updatePage = (selectedPageId, title, content) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `/api/pages/${selectedPageId}`;
    return async dispatch => {
        const res = await fetch(path, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ selectedPageId, title, content, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(editPage(res.data));
        }
        return res;
    }
}

export default function pagesReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case CREATE_PAGE:
            return {...state, [action.page.id]: action.page};
        case SET_PAGES:
            // console.log(newState)
            return action.pages;
        case DELETE_PAGE:
            delete newState[action.pageId];
            return newState;
        case EDIT_PAGE:
            newState[action.page.id] = action.page;
            return newState;
        default:
            return state;
    }
}
