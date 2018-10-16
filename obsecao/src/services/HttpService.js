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

    static get(endpoint, config) {
        var url = AppConfig.apiUrl + endpoint

        if (config && config.params) 
            url += '?' + Object.keys(config.params).map(key => `${key}="${config.params[key]}"`).join('&')

        return axios.get(url, Object.assign({}, getBaseConfig(), config))
    }

    static post(url, params, config) {
        return axios.post(AppConfig.apiUrl + url, params, Object.assign({}, getBaseConfig(), config))
    }

    static put(url, params, config) {
        console.log(AppConfig.apiUrl + url, params)
        return axios.put(AppConfig.apiUrl + url, params, Object.assign({}, getBaseConfig(), config))
    }
}