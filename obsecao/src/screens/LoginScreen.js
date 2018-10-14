import React from 'react'
import {Dimensions, ImageBackground, Keyboard, StyleSheet, View} from 'react-native'
import {
    Container,
    Content,
    Form,
    Input,
    Item,
    Label,
    Toast
} from 'native-base'
import {ButtonComponent} from 'Components'
import {NavigationService} from 'Services'
import {Images} from 'Assets'

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: ''
        }
    }

    render() {
        const {height} = Dimensions.get('window')

        return (
            <Container>
                <Content>
                    <ImageBackground
                        source={Images.background}
                        style={{
                        width: '100%',
                        height
                    }}>
                        <View
                            style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: height * 2 / 3,
                            justifyContent: 'center',
                            paddingHorizontal: 25
                        }}>
                            <Form style={styles.form}>
                                <Item floatingLabel>
                                    <Label style={styles.label}>Usuário</Label>
                                    <Input
                                        style={styles.input}
                                        value={this.state.user}
                                        onChangeText={user => this.setState({user})}
                                        autoCorrect={false}/>
                                </Item>
                                <Item floatingLabel>
                                    <Label style={styles.label}>Senha</Label>
                                    <Input
                                        style={styles.input}
                                        value={this.state.password}
                                        onChangeText={password => this.setState({password})}
                                        autoCorrect={false}
                                        secureTextEntry/>
                                </Item>
                                <View style={styles.buttonContainer}>
                                    <ButtonComponent
                                        text={'Entrar'}
                                        onPress={() => {
                                        tryLogin.call(this)
                                        Keyboard.dismiss()
                                    }}
                                        full/>
                                </View>
                            </Form>
                        </View>
                    </ImageBackground>
                </Content>
            </Container>
        )
    }
}

function tryLogin() {
    const {user, password} = this.state
    if (user == 'grupo4' && password == 'grupo4') 
        NavigationService.home.resetTo()
    else 
        Toast.show({text: 'Credenciais inválidas', buttonText: 'OK', duration: 3000, type: 'warning'})
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20
    },
    form: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 4,
        padding: 15
    },
    input: {
        color: 'white'
    },
    label: {
        color: 'white'
    }
})