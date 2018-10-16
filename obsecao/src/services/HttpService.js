import axios from 'axios'
import store from '../flux/store'
import AppConfig from 'AppConfig'

function getBaseConfig() {
    const user = store
        .getState()
        .user
    if (!user) 
        return null
    return {
        headers: {
            Authorization: `Bearer ${user.accessToken}`,
            Pragma: 'no-cache'
        }
    }
}

export default class HttpService {

    static get(url, config) {
        return axios.get(AppConfig.apiUrl + url, Object.assign({}, getBaseConfig(), config))
    }

    static post(url, params, config) {
        return axios.post(AppConfig.apiUrl + url, params, Object.assign({}, getBaseConfig(), config))
    }
}