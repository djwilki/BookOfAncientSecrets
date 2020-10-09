import Cookies from 'js-cookie';

const DELETE_PAGE = "page/DELETE_PAGE"

const deletePage = (pageId) => {
    return {
        type: DELETE_PAGE,
        pageId
    }
}

export const addPage = (title, description, published, ownerId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = '/api/pages/';
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
            dispatch(createPage(res.data));
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
            console.log(newState)
            return action.pages;
        case DELETE_PAGE:
            delete newState[action.pageId];
            return newState;
        default:
            return state;
    }
}
