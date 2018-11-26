import store from '../flux/store'
import {generalActions} from 'Actions'
import {Toast} from 'native-base'
import {HttpService} from 'Services'

export default class FeedService {
    static feed() {
        store.dispatch(generalActions.showLoader())
        return HttpService
            .get('/feed', {})
            .then((data) => {
                store.dispatch(generalActions.hideLoader())
                return data.data
            })
            .catch(error => {
                Toast.show({text: 'Não foi possível realizar o cadastro', buttonText: 'OK', duration: 3000, type: 'warning'})
                store.dispatch(generalActions.hideLoader())
            })
    }
}