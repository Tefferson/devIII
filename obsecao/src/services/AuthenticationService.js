import store from '../flux/store'
import {userActions, generalActions} from 'Actions'
import {Toast} from 'native-base'
import {NavigationService} from 'Services'

// TODO: mock
export default class AuthenticationService {
    static login(user, password) {
        store.dispatch(generalActions.showLoader())
        return new Promise((success, reject) => {
            setTimeout(() => {
                store.dispatch(generalActions.hideLoader())
                success({
                    data: {
                        name: 'teste',
                        user
                    }
                })
            }, 2000)
        }).then(({data}) => {
            store.dispatch(userActions.login(data))
        }).catch(({data}) => {
            Toast.show({text: 'Credenciais inválidas', buttonText: 'OK', duration: 3000, type: 'warning'})
        })
    }

    static logout() {
        store.dispatch(userActions.logout())
        NavigationService
            .login
            .resetTo()
    }
}