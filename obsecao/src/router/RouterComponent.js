/**
 * @providesModule Router
 */
import React from 'react'
import {Root} from 'native-base'
import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import {HomeScreen, LoginScreen} from 'Screens'
import {NavigationService} from 'Services'
import {Provider} from 'react-redux'
import {LoaderComponent} from 'Components'
import store from '../flux/store'

const HomeDrawer = createDrawerNavigator({
    Home: {
        screen: HomeScreen
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