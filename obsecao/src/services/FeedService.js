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
                Toast.show({text: 'Não foi possível realizar a operação', buttonText: 'OK', duration: 3000, type: 'warning'})
                store.dispatch(generalActions.hideLoader())
            })
    }

    static getAnnouncement(idAnnouncement) {
        store.dispatch(generalActions.showLoader())
        return HttpService
            .get(`/get-announcement/${idAnnouncement}`, {})
            .then((data) => {
                store.dispatch(generalActions.hideLoader())
                return data.data
            })
            .catch(error => {
                Toast.show({text: 'Não foi possível realizar a operação', buttonText: 'OK', duration: 3000, type: 'warning'})
                store.dispatch(generalActions.hideLoader())
            })
    }

    static getMyAnnouncements() {
        store.dispatch(generalActions.showLoader())
        return HttpService
            .get(`/my-announcements`, {})
            .then((data) => {
                store.dispatch(generalActions.hideLoader())
                return data.data
            })
            .catch(error => {
                Toast.show({text: 'Não foi possível realizar a operação', buttonText: 'OK', duration: 3000, type: 'warning'})
                store.dispatch(generalActions.hideLoader())
            })
    }

    static getMyFavoriteAnnouncements() {
        store.dispatch(generalActions.showLoader())
        return HttpService
            .get(`/get-announcement/getFavorites`, {})
            .then((data) => {
                store.dispatch(generalActions.hideLoader())
                return data.data
            })
            .catch(error => {
                Toast.show({text: 'Não foi possível realizar a operação', buttonText: 'OK', duration: 3000, type: 'warning'})
                store.dispatch(generalActions.hideLoader())
            })
    }

    static registerAnnouncement(announcement) {
        store.dispatch(generalActions.showLoader())
        return HttpService
            .post(`/create-announcement`, announcement)
            .then((data) => {
                store.dispatch(generalActions.hideLoader())
                return data.data
            })
            .catch(error => {
                Toast.show({text: 'Não foi possível realizar a operação', buttonText: 'OK', duration: 3000, type: 'warning'})
                store.dispatch(generalActions.hideLoader())
            })
    }

    static updateAnnouncement(announcement) {
        store.dispatch(generalActions.showLoader())
        return HttpService
            .post(`/update-announcement/${announcement._id}`, announcement)
            .then((data) => {
                store.dispatch(generalActions.hideLoader())
                return data.data
            })
            .catch(error => {
                Toast.show({text: 'Não foi possível realizar a operação', buttonText: 'OK', duration: 3000, type: 'warning'})
                store.dispatch(generalActions.hideLoader())
            })
    }

    static finishAnnouncement(announcementId) {
        store.dispatch(generalActions.showLoader())
        return HttpService
            .post(`/remove-announcement/${announcementId}`, null)
            .then((data) => {
                store.dispatch(generalActions.hideLoader())
                return data.data
            })
            .catch(error => {
                Toast.show({text: 'Não foi possível realizar a operação', buttonText: 'OK', duration: 3000, type: 'warning'})
                store.dispatch(generalActions.hideLoader())
            })
    }

    static addAsFavorite(idAnnouncement) {
        
        store.dispatch(generalActions.showLoader())
        return HttpService
            .post(`/get-announcement/${idAnnouncement}/addAsFavorite`, {})
            .then((data) => {
                store.dispatch(generalActions.hideLoader())
                return data.data
            })
            .catch(error => {
                Toast.show({text: 'Não foi possível realizar a operação', buttonText: 'OK', duration: 3000, type: 'warning'})
                store.dispatch(generalActions.hideLoader())
            })
    }

    static removeFromFavorites(idAnnouncement) {
        
        store.dispatch(generalActions.showLoader())
        return HttpService
            .post(`/get-announcement/${idAnnouncement}/removeFromFavorites`, {})
            .then((data) => {
                store.dispatch(generalActions.hideLoader())
                return data.data
            })
            .catch(error => {
                Toast.show({text: 'Não foi possível realizar a operação', buttonText: 'OK', duration: 3000, type: 'warning'})
                store.dispatch(generalActions.hideLoader())
            })
    }

    static formatSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000);
        
        var interval = Math.floor(seconds / 31536000);
        
        if (interval > 1) {
            return interval + " anos";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " meses";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " dias";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " horas";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutos";
        }
        return Math.floor(seconds) + " segundos";
    }
}