import store from '../flux/store'
import { generalActions } from 'Actions'
import { Toast } from 'native-base'
import { HttpService } from 'Services'
const AppConfig = Expo.Constants.manifest.extra

export default class GalleryService {
    static getImageOrDefault(photo) {
        if (!photo)
            return require('../../assets/images/dog.png')
    
        return { uri: `${AppConfig.apiUrl}${photo.uri}` }
    }

    static getPhotos(idAnnouncement) {
        store.dispatch(generalActions.showLoader())
        return HttpService
            .get(`/get-photos/${idAnnouncement}`, {})
            .then((data) => {
                store.dispatch(generalActions.hideLoader())
                return data.data
            })
            .catch(error => {
                Toast.show({ text: 'Não foi possível realizar a operação', buttonText: 'OK', duration: 3000, type: 'warning' })
                store.dispatch(generalActions.hideLoader())
            })
    }

    static uploadPhoto(idAnnouncement, photo) {

        const data = new FormData();
        data.append('file', {
            uri: photo.uri,
            type: 'image/jpeg',
            name: 'file'
        })

        data.append("announcementId", idAnnouncement)

        store.dispatch(generalActions.showLoader())
        return HttpService
            .post(`/upload-image`, data)
            .then((data) => {
                store.dispatch(generalActions.hideLoader())
                return data.data
            })
            .catch(error => {
                Toast.show({ text: 'Não foi possível realizar a operação', buttonText: 'OK', duration: 3000, type: 'warning' })
                store.dispatch(generalActions.hideLoader())
            })
    }

    static removePhoto(photo) {
        store.dispatch(generalActions.showLoader())
        return HttpService
            .post(`/remove-image/${photo._id}`, photo)
            .then((data) => {
                store.dispatch(generalActions.hideLoader())
                return data.data
            })
            .catch(error => {
                Toast.show({ text: 'Não foi possível realizar a operação', buttonText: 'OK', duration: 3000, type: 'warning' })
                store.dispatch(generalActions.hideLoader())
            })
    }
}