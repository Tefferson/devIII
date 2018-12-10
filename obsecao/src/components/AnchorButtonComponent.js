import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {Button} from 'native-base'
import {Colors} from 'Styles'

export default class AnchorButtonComponent extends React.Component {

    render() {
        const {text} = this.props

        return (
            <Button style={styles.button} transparent {...this.props}>
                <Text style={styles.text}>{text}</Text>
            </Button>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4
    },
    text: {
        color: 'white',
        textDecorationLine: 'underline'
    }
})