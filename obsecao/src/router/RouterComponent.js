/**
 * @providesModule Router
 */
import React from 'react'
import {Root} from 'native-base'
import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import {HomeScreen, CameraScreen, LoginScreen, RegistrationScreen, AnnouncementsScreen, AnnouncementDetailsScreen, AnnouncementManagementScreen} from 'Screens'
import {NavigationService} from 'Services'
import {Provider} from 'react-redux'
import {LoaderComponent} from 'Components'
import store from '../flux/store'

const HomeDrawer = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Início"
        }
    },
    Announcements: {
        screen: AnnouncementsScreen,
        navigationOptions: {
            header: null,
            title: "Buscar um cãozinho"
        }
    },
    AnnouncementCreation: {
        screen: AnnouncementManagementScreen,
        navigationOptions: {
            header: null,
            title: "Publicar anúncio de adoção"
        }
    }
})

const AppRoot = createStackNavigator({
    Home: {
        screen: HomeDrawer,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    Registration: {
        screen: RegistrationScreen,
        navigationOptions: {
            header: null
        }
    },
    Announcements: {
        screen: AnnouncementsScreen,
        navigationOptions: {
            header: null
        }
    },
    AnnouncementDetails: {
        screen: AnnouncementDetailsScreen,
        navigationOptions: {
            header: null
        }
    },
    AnnouncementCreation: {
        screen: AnnouncementManagementScreen,
        navigationOptions: {
            header: null,
        }
    },
    Camera: {
        screen: CameraScreen,
        navigationOptions: {
            header: null,
        }
    }
}, {initialRouteName: 'Login'})

class RouterComponent extends React.Component {

    state = {
        isLoading: false
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                isLoading: store
                    .getState()
                    .general
                    .isLoading
            })
        })
    }

    render() {
        return (
            <Provider store={store}>
                <Root>
                    <AppRoot ref={NavigationService.setTopLevelNavigator}/>
                    <LoaderComponent show={this.state.isLoading}/>
                </Root>
            </Provider>
        )
    }
}

export default RouterComponent