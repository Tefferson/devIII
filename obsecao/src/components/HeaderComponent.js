import React from 'react'
import {StatusBar, StyleSheet} from 'react-native'
import {Header, Body, Title} from 'native-base'
import {Colors} from 'Styles'

export default class HeaderComponent extends React.Component {
    render() {
        const {right} = this.props
        return (
            <Header style={styles.header}>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                {right && right()}
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        marginTop: (StatusBar.currentHeight)
    }
})