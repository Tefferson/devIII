import axios from 'axios'
import store from '../flux/store'
//import AppConfig from 'AppConfig'
const AppConfig = Expo.Constants.manifest.extra

import StorageService from './StorageService'

export default class HttpService {
    static async getBaseConfig() {
        // const user = store
        //     .getState()
        //     .user
        let result = {
            headers: {            
                Pragma: 'no-cache'
            }
        }

        try{
            let user = await StorageService.user.getItemAsync()
            
            if (user) {
                let u = JSON.parse(user)
                
                result.headers.Authorization = `Bearer ${u.accessToken}`
            }
        } catch(error){
            
        }
    
        return result
    }

    static get(endpoint, config) {
        let client = new HttpService();

        return HttpService
                .getBaseConfig()
                .then(headers => {
                    return client.get(endpoint, config, headers)
                })
    }
    static post(url, params, config) {
        let client = new HttpService();

        return HttpService
                .getBaseConfig()
                .then(headers => {
                    return client.post(url, params, headers)
                })
    }
    static put(url, params, config) {
        let client = new HttpService();

        return HttpService
                .getBaseConfig()
                .then(headers => {
                    return client.put(url, params, headers)
                })
    }

    get(endpoint, config, headers) {
        var url = AppConfig.apiUrl + endpoint

        if (config && config.params) 
            url += '?' + Object.keys(config.params).map(key => `${key}="${config.params[key]}"`).join('&')

        return axios.get(url, Object.assign({}, headers, config))
    }

    post(url, params, config, headers) {
        return axios.post(AppConfig.apiUrl + url, params, Object.assign({}, headers, config))
    }

    put(url, params, config, headers) {
        console.log(AppConfig.apiUrl + url, params)
        return axios.put(AppConfig.apiUrl + url, params, Object.assign({}, headers, config))
    }
}