import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {Button} from 'native-base'
import {colors} from 'Styles'

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
        backgroundColor: colors.primary,
        borderRadius: 4
    },
    text: {
        color: 'white'
    }
})