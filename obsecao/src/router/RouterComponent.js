/**
 * @providesModule Router
 */
import React from 'react'
import {Root} from 'native-base'
import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import {HomeScreen, LoginScreen} from 'Screens'
import {NavigationService} from 'Services'

export default class RouterComponent extends React.Component {
    render() {
        return (
            <Root>
                <AppRoot ref={NavigationService.setTopLevelNavigator}/>
            </Root>
        )
    }
}

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