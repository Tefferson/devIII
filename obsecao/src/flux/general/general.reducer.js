import generalConstants from './general.constants'

const defaultState = {
    isLoading: false
}

const generalReducer = (initialState = defaultState, {
    state = defaultState,
    type
}) => {
    switch (type) {
        case generalConstants.hideLoader:
        case generalConstants.showLoader:
            return {
                ...initialState,
                ...state
            };
        default:
            return state
    }
}

export default generalReducer