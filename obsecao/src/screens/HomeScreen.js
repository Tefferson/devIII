import React from 'react'
import { Dimensions, ImageBackground } from 'react-native'
import { Button, Container, Content, Icon, Tab, Tabs } from 'native-base'
import { HeaderComponent } from 'Components'
import { AuthenticationService } from 'Services'
import MyAnnouncementsTab from './MyAnnouncementsTab'
import MyFavoriteAnnouncementsTab from './MyFavoriteAnnouncementsTab'

const tmpSplash = require('../../assets/splash.png')

function renderRight() {
    return (
        <Button onPress={logout.bind(this)} transparent><Icon name={'exit'} /></Button>
    )
}

function logout() {
    AuthenticationService.logout()
}

export default class HomeScreen extends React.Component {
    render() {
        const { height } = Dimensions.get('window')

        return (
            <Container>
                <HeaderComponent title={'Home'} right={renderRight.bind(this)} />
                <Content scrollEnabled={true}>
                    <Tabs>
                        <Tab heading="Meus anúncios">
                            <MyAnnouncementsTab />
                        </Tab>
                        <Tab heading="Favoritos">
                            <MyFavoriteAnnouncementsTab />
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        )
    }
}