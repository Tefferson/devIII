import store from '../flux/store'
import {generalActions} from 'Actions'
import {Toast} from 'native-base'
import {HttpService} from 'Services'

export default class RegistrationService {
    static register(params) {
        store.dispatch(generalActions.showLoader())
        return HttpService
            .get('/register', {params})
            .then(() => {
                store.dispatch(generalActions.hideLoader())
            })
            .catch(error => {
                Toast.show({text: 'Não foi possível realizar o cadastro', buttonText: 'OK', duration: 3000, type: 'warning'})
                store.dispatch(generalActions.hideLoader())
            })
    }
}