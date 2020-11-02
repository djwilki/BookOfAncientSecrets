import Cookies from 'js-cookie';

const DELETE_CHARACTER = "character/DELETE_CHARACTER"
const CREATE_CHARACTER = "character/CREATE_CHARACTER"
const SET_CHARACTERS = "character/SET_CHARACTER"
const EDIT_CHARACTER = "character/EDIT_CHARACTER"

const deleteCharacter = (characterId) => {
    return {
        type: DELETE_CHARACTER,
        characterId
    }
}

const createCharacter = (character) => {
    return {
        type: CREATE_CHARACTER,
        character
    }
}

const getUserCharacters = (characters) => {
    return {
        type: SET_CHARACTERS,
        characters
    }
}

const editCharacter = (character) => {
    return {
        type: EDIT_CHARACTER,
        character
    }
}

export const addCharacter = (name,
                            strength,
                            dexterity,
                            constitution,
                            intelligence,
                            wisdom,
                            charisma,
                            armor_class,
                            max_hitpoints,
                            features = "",
                            actions = "",
                            ownerId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = '/api/characters/';
    return async dispatch => {
        const res = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ name,
                strength,
                dexterity,
                constitution,
                intelligence,
                wisdom,
                charisma,
                armor_class,
                max_hitpoints,
                features,
                actions,
                ownerId, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(createCharacter(res.data));
        }
        return res;
    }
}


export const setUserCharacters = (userId) => {
    return async dispatch => {
        const res = await fetch(`api/users/${userId}/characters`);

        res.data = await res.json();
        if (res.ok) {
            dispatch(getUserCharacters(res.data));
        }

        return res;
    }
}

export const removeCharacter = (characterId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path =`api/characters/${characterId}`
    return async dispatch => {
        const res = await fetch(path, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
        });

        res.data = await res.json();
        if (res.ok) {
            dispatch(deleteCharacter(characterId));
        }
    }
}


export const updateCharacter = (selectedCharacterId,
                                name,
                                strength,
                                dexterity,
                                constitution,
                                intelligence,
                                wisdom,
                                charisma,
                                armor_class,
                                max_hitpoints,
                                features = "",
                                actions = "",
                                ownerId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `/api/characters/${selectedCharacterId}`;
    return async dispatch => {
        const res = await fetch(path, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ name,
                strength,
                dexterity,
                constitution,
                intelligence,
                wisdom,
                charisma,
                armor_class,
                max_hitpoints,
                features,
                actions,
                ownerId, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(editCharacter(res.data));
        }
        return res;
    }
}

export default function charactersReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case CREATE_CHARACTER:
            return {...state, [action.character.id]: action.character};
        case SET_CHARACTERS:
            return action.characters;
        case DELETE_CHARACTER:
            delete newState[action.characterId];
            return newState;
        case EDIT_CHARACTER:
            newState[action.character.id] = action.character;
            return newState;
        default:
            return state;
    }
}
