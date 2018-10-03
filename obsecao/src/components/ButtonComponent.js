import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {Button} from 'native-base'
import {Colors} from 'Styles'

export default class ButtonComponent extends React.Component {

    render() {
        const {text} = this.props

        return (
            <Button style={styles.button} {...this.props}>
                <Text style={styles.text}>{text}</Text>
            </Button>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 4
    },
    text: {
        color: 'white'
    }
})