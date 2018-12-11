import {AsyncStorage} from 'react-native'

const clearSecureStore = async() => {
    await AsyncStorage.clear()
}

const getItemAsync = key => AsyncStorage.getItem(key)

const setItemAsync = (key, value) => AsyncStorage.setItem(key, value)

const deleteItemAsync = key => AsyncStorage.removeItem(key)

const parser = value => (value
    ? JSON.parse(value)
    : null)

const KEYS = {
    user: '@obsecao:user'
}

export default class StorageService {
    static user = {
        getItemAsync: () => getItemAsync(KEYS.user),
        getAsync: () => getItemAsync(KEYS.user).then(parser),
        setAsync: user => setItemAsync(KEYS.user, JSON.stringify(user)),
        removeAsync: () => deleteItemAsync(KEYS.user)
    }
}