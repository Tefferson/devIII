import store from '../flux/store'
import {userActions, generalActions} from 'Actions'
import {Toast} from 'native-base'
import {NavigationService} from 'Services'
import HttpService from './HttpService';
import { KEYS } from './StorageService'
import {AsyncStorage} from 'react-native'

// TODO: mock
async function cleanUserCache() {
    try{
        return await AsyncStorage.removeItem(KEYS.user)
    }
    catch(e){

    }
}

export default class AuthenticationService {
    static async login(user, password) {
        store.dispatch(generalActions.showLoader())
        
        let params = {
            username: user,
            password: password
        };
        
        await cleanUserCache();

        return HttpService
            .post('/authenticate', params)
            .then((data) => {
                let user = data.data;
                user.accessToken = data.headers["set-authorization"]

                store.dispatch(generalActions.hideLoader())
                store.dispatch(userActions.login(user))
            })
            .catch(({data}) => {
                store.dispatch(generalActions.hideLoader())
                Toast.show({text: 'Credenciais inválidas', buttonText: 'OK', duration: 3000, type: 'warning'})
            })
        // return new Promise((success, reject) => {
        //     setTimeout(() => {
        //         store.dispatch(generalActions.hideLoader())
        //         success({
        //             data: {
        //                 name: 'teste',
        //                 user
        //             }
        //         })
        //     }, 2000)
        // }).then(({data}) => {
        //     store.dispatch(userActions.login(data))
        // })
    }

    static logout() {
        store.dispatch(userActions.logout())
        NavigationService
            .login
            .resetTo()
    }
}