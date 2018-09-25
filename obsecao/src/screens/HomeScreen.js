import React from 'react'
import {Text} from 'react-native'
import {Container, Content} from 'native-base'
import {HeaderComponent} from 'Components'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <HeaderComponent title={'Home'}/>
                <Content>
                    <Text>Home content</Text>
                </Content>
            </Container>
        )
    }
}