import React from 'react'
import {StatusBar, StyleSheet, Picker} from 'react-native'
import {Header, Body, Title, Icon, Button} from 'native-base'
import {Colors} from 'Styles'
import { withNavigation } from 'react-navigation';

class HeaderComponent extends React.Component {
    render() {
        const {right} = this.props
        return (
            <Header style={styles.header}>
                <Button onPress={showMenu.bind(this)} transparent><Icon name={'list'}/></Button>
                
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                {right && right()}
            </Header>
        )
    }
}

export default withNavigation(HeaderComponent);

function showMenu() {
    this.props.navigation.openDrawer();
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        marginTop: (StatusBar.currentHeight)
    }
})