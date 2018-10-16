import userConstants from './user.constants'
import {StorageService} from 'Services'

const login = user => {
    StorageService
        .user
        .setAsync(user)
    return {type: userConstants.login, state: {
            user
        }}
}

const logout = () => {
    StorageService
        .user
        .removeAsync()
    return {type: userConstants.logout}
}

const userActions = {
    login,
    logout
}

export default userActions