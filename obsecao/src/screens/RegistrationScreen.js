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
import {RegistrationService} from 'Services'
import {Images} from 'Assets'
import {connect} from 'react-redux'

class RegistrationScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'tefferson',
            lastName: 'guterres',
            email: 'tefferson@gmail.com',
            password: 'a123',
            passwordConfirmation: 'a123',
            accessCode: '',
            showRegistered: false
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
                            height,
                            justifyContent: 'center',
                            paddingHorizontal: 25
                        }}>
                            <Form style={styles.form}>
                                <Item floatingLabel>
                                    <Label style={styles.label}>Nome</Label>
                                    <Input
                                        style={styles.input}
                                        value={this.state.firstName}
                                        onChangeText={firstName => this.setState({firstName})}
                                        autoCorrect={false}/>
                                </Item>
                                <Item floatingLabel>
                                    <Label style={styles.label}>Sobrenome</Label>
                                    <Input
                                        style={styles.input}
                                        value={this.state.lastName}
                                        onChangeText={lastName => this.setState({lastName})}
                                        autoCorrect={false}/>
                                </Item>
                                <Item floatingLabel>
                                    <Label style={styles.label}>E-mail</Label>
                                    <Input
                                        style={styles.input}
                                        value={this.state.user}
                                        onChangeText={email => this.setState({email})}
                                        keyboardType={'email-address'}
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
                                <Item floatingLabel>
                                    <Label style={styles.label}>Confirmação da senha</Label>
                                    <Input
                                        style={styles.input}
                                        value={this.state.passwordConfirmation}
                                        onChangeText={passwordConfirmation => this.setState({passwordConfirmation})}
                                        autoCorrect={false}
                                        secureTextEntry/>
                                </Item>
                                <Item floatingLabel>
                                    <Label style={styles.label}>Código de acesso</Label>
                                    <Input
                                        style={styles.input}
                                        value={this.state.accessCode}
                                        onChangeText={accessCode => this.setState({accessCode})}
                                        autoCorrect={false}/>
                                </Item>
                                <View style={styles.buttonContainer}>
                                    <ButtonComponent
                                        text={'Cadastrar'}
                                        onPress={() => Keyboard.dismiss() || register.call(this)}
                                        full/>
                                </View>
                            </Form>
                        </View>
                    </ImageBackground>
                    {this.state.showRegistered && (
                        <ImageBackground
                            source={Images.backgroundCelebration}
                            style={{
                            position: 'absolute',
                            width: '100%',
                            height
                        }}></ImageBackground>
                    ) || null}
                </Content>
            </Container>
        )
    }
}

function register() {
    const {
        firstName,
        lastName,
        email,
        password,
        passwordConfirmation,
        accessCode
    } = this.state

    if (password !== passwordConfirmation) {
        Toast.show({text: 'As senhas não conferem', buttonText: 'OK', duration: 3000, type: 'warning'})
        return;
    }

    RegistrationService
        .register({
        firstName,
        lastName,
        email,
        password,
        passwordConf: passwordConfirmation,
        code: accessCode
    })
        .then(() => this.setState({showRegistered: true}))
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

const connectedScreen = connect(null)(RegistrationScreen)

export default connectedScreen