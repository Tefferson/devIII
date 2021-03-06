import {NavigationActions, StackActions} from 'react-navigation'
let navigator = null

const navigate = routeName => params => navigator
    ._navigation
    .navigate(routeName, params)

const reset = routeName => params => navigator
    ._navigation
    .dispatch(StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({routeName, params})]
    }))

const setTopLevelNavigator = navigationRef => (navigator = navigationRef)

const home = {
    navigateTo: navigate('Home'),
    resetTo: reset('Home')
}

const announcements = {
    navigateTo: navigate('Announcements'),
    resetTo: reset('Announcements')
}

const camera = {
    navigateTo: navigate('Camera'),
    resetTo: reset('Camera')
}

const announcementDetails = {
    navigateTo: navigate('AnnouncementDetails'),
    resetTo: reset('AnnouncementDetails')
}

const login = {
    navigateTo: navigate('Login'),
    resetTo: reset('Login')
}

const registration = {
    navigateTo: navigate('Registration')
}

const announcementManagement = {
    navigateTo: navigate('AnnouncementCreation'),
    resetTo: reset('AnnouncementCreation')
}

export default {
    setTopLevelNavigator,
    home,
    camera,
    announcements,
    announcementDetails,
    announcementManagement,
    login,
    registration
}