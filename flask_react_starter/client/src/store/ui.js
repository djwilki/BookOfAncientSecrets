
const SET_SELECTED_ADVENTURE_ID = 'session/SET_SELECTED_ADVENTURE_ID'
const SET_SELECTED_PAGE_ID = 'session/SET_SELECTED_PAGE_ID'
const SET_SELECTED_CHARACTER_ID = 'session/SET_SELECTED_CHARACTER_ID'

export const setSelectedAdventureId = (adventureId) => {
    return {
        type: SET_SELECTED_ADVENTURE_ID,
        adventureId
    }
}

export const setSelectedCharacterId = (characterId) => {
    return {
        type: SET_SELECTED_CHARACTER_ID,
        characterId
    }
}

export const setSelectedPageId = (pageId) => {
    return {
        type: SET_SELECTED_PAGE_ID,
        pageId
    }
}

const initialSessionState = {
    selectedAdventureId: null,
    selectedPageId: null,
    selectedCharacterId: null,
}

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
        case SET_SELECTED_CHARACTER_ID:
            localStorage.setItem('selectedCharacter', action.characterId)
            newState.selectedCharacterId = action.characterId;
            return newState
        default:
            return state;
    }
};
