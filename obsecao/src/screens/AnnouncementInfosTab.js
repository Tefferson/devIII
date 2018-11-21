import React from 'react'
import {Dimensions, Image, View, Text, StyleSheet} from 'react-native'
import {Button, Container, Content, Icon,  Tab, Tabs} from 'native-base'
import {HeaderComponent} from 'Components'
import {AuthenticationService} from 'Services'

export default class AnnouncementInfosTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }
    
    render() {
        return (
            <View>
                <Text>Infos</Text>
            </View>
        )
    }
}
