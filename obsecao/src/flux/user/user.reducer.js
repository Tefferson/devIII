import userConstants from './user.constants'

const defaultState = {
    user: null
}

const userReducer = (initialState = defaultState, {
    state = defaultState,
    type
}) => {
    switch (type) {
        case userConstants.login:
            return state

        case userConstants.logout:
            return null

        default:
            return state
    }
}

export default userReducer