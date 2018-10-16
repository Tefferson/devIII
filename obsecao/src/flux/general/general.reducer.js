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
        default:
            return state
    }
}

export default generalReducer