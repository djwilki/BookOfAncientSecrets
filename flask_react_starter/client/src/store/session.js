import Cookies from 'js-cookie';

const SET_USER = 'session/SET_USER';
const LOGOUT_USER = 'session/LOGOUT_USER';




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

export const loadSession = () => {
    return async dispatch => {
        const res = await fetch('/api/session/load');
        res.data = await res.json();
        if (res.ok) {
            dispatch(setUser(res.data.user));
        }
        return res
    }

}


const initialSessionState = {
    userId: null,
    username: null,
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
        default:
            return state;
    }
};
