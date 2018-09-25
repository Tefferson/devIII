import React from 'react'
import {StatusBar} from 'react-native'
import {Header, Body, Title} from 'native-base'

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <Header
                style={{
                marginTop: (StatusBar.currentHeight)
            }}>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
            </Header>
        )
    }
}