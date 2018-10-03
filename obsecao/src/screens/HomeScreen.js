import React from 'react'
import {Dimensions, ImageBackground} from 'react-native'
import {Button, Container, Content, Icon} from 'native-base'
import {HeaderComponent} from 'Components'
import {NavigationService} from 'Services'

const tmpSplash = require('../../assets/splash.png')

function renderRight() {
    return (
        <Button onPress={logout.bind(this)} transparent><Icon name={'exit'}/></Button>
    )
}

function logout() {
    NavigationService
        .login
        .resetTo()
}

export default class HomeScreen extends React.Component {
    render() {
        const {height} = Dimensions.get('window')

        return (
            <Container>
                <HeaderComponent title={'Home'} right={renderRight.bind(this)}/>
                <Content scrollEnabled={false}>
                    <ImageBackground
                        source={tmpSplash}
                        style={{
                        width: '100%',
                        height
                    }}></ImageBackground>
                </Content>
            </Container>
        )
    }
}