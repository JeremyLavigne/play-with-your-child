const initialState = {
    originalSequence: [],
    playerSequence: [],
    sequenceDuration: 1000,
    originalSequenceIsPlaying: false,
    playerSequenceIsPlaying: false,
    buttonsAreDisabled: true
}

export const buttonIsClicked = (buttonColor) => {
    return {
        type: 'BUTTON_CLICKED',
        data: {
            value: buttonColor
        }
    }
}

export const startOriginalSequence = () => {
    return {
        type: 'START_ORIGINAL_SEQUENCE'
    }
}

export const endOriginalSequence = () => {
    return {
        type: 'END_ORIGINAL_SEQUENCE'
    }
}

export const startPlayerSequence = () => {
    return {
        type: 'START_PLAYER_SEQUENCE'
    }
}

export const endPlayerSequence = () => {
    return {
        type: 'END_PLAYER_SEQUENCE'
    }
}

export const initPlayerSequence = () => {
    return {
        type: 'INIT_PLAYER_SEQUENCE'
    }
}

export const addToOriginalSequence = (color) => {
    return {
        type: 'ADD_TO_ORIGINAL',
        data: {
            value: color
        }
    }
}

export const addToPlayerSequence = (color) => {
    return {
        type: 'ADD_TO_PLAYER',
        data: {
            value: color
        }
    }
}

export const newSimon = () => {
    return {
        type: 'NEW_GAME'
    }
}


const simonReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    //console.log('action', action)

    let newState = { ...state }

    switch (action.type) {
        case 'BUTTON_CLICKED':
            newState.playerSequence.add(action.data.value)
            return newState

        case 'START_ORIGINAL_SEQUENCE':
            newState.originalSequenceIsPlaying = true
            return newState

        case 'END_ORIGINAL_SEQUENCE':
            newState.originalSequenceIsPlaying = false
            newState.buttonsAreDisabled = false
            return newState

        case 'START_PLAYER_SEQUENCE':
            newState.playerSequenceIsPlaying = true
            return newState

        case 'END_PLAYER_SEQUENCE':
            newState.playerSequenceIsPlaying = false
            newState.buttonsAreDisabled = true
            return newState

        case 'INIT_PLAYER_SEQUENCE':
            newState.playerSequence = []
            return newState
        
        case 'ADD_TO_ORIGINAL':
            const newOriginalSequence = state.originalSequence
            newOriginalSequence.push(action.data.value)
            newState.originalSequence = newOriginalSequence
            return newState

        case 'ADD_TO_PLAYER':
            const newPlayerSequence = state.playerSequence
            newPlayerSequence.push(action.data.value)
            newState.playerSequence = newPlayerSequence
            return newState

        case 'NEW_GAME':
            newState.playerSequence = []
            newState.originalSequence = []
            newState.sequenceDuration = 0
            newState.originalSequenceIsPlaying = false
            newState.playerSequenceIsPlaying = false
            newState.buttonsAreDisabled = true
            return newState

        default: return state
    }
}

export default simonReducer