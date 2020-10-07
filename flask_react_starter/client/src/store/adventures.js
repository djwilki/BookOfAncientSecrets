import Cookies from 'js-cookie';

const CREATE_ADVENTURE = "adventure/CREATE_ADVENTURE"


const createAdventure = (adventure) => {
    return {
        type: CREATE_ADVENTURE,
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
            body: JSON.stringify({title, description, published, ownerId, "csrf_token": csrfToken})
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(createAdventure(res.data));
        }
        return res;
    }
}


export default function adventuresReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case CREATE_ADVENTURE:
            return newState[action.adventure.id] =  action.adventure;
        default:
            return state;
    }
}
