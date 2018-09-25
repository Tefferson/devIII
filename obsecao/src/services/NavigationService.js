let navigator = null

const navigate = routeName => params => navigator
    ._navigation
    .navigate(routeName, params)

const setTopLevelNavigator = navigationRef => (navigator = navigationRef)

const home = {
    navigateTo: navigate('Home')
}

export default {
    setTopLevelNavigator,
    home
}