import React from 'react'
import {Dimensions, Image, View, Text, StyleSheet} from 'react-native'
import {Button, Container, Content, Icon,  Tab, Tabs} from 'native-base'
import {HeaderComponent} from 'Components'
import {AuthenticationService} from 'Services'

function logout() {
    AuthenticationService.logout()
}

export default class AnnouncementContactScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    
    render() {
        const {height} = Dimensions.get('window')

        return (
            <Container>
                <HeaderComponent title={'Announcements'} right={renderRight.bind(this)}/>
                <Content scrollEnabled={true}>
                    
                </Content>
            </Container>
        )
    }
}
