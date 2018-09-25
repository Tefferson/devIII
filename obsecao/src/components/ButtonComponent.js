import React from 'react'
import {Text} from 'react-native'
import {Button} from 'native-base'

export default class ButtonComponent extends React.Component {

    render() {
        const {text} = this.props

        return (
            <Button {...this.props}>
                <Text>{text}</Text>
            </Button>
        )
    }
}