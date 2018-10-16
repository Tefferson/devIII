import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Pulse} from 'react-native-loader'
import {Colors} from 'Styles'

export default class LoaderComponent extends React.Component {
    render() {
        return this.props.show && (
            <View style={styles.container}>
                <Pulse size={25} color={Colors.primary}/>
            </View>
        ) || null
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    }
})