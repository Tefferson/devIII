import React from 'react'
import {Dimensions, ImageBackground, Keyboard, StyleSheet, View} from 'react-native'
import {
    Container,
    Content,
    Form,
    Input,
    Item,
    Label
} from 'native-base'
import {AnchorButtonComponent, ButtonComponent} from 'Components'
import {AuthenticationService, NavigationService} from 'Services'
import {Images} from 'Assets'
import {connect} from 'react-redux'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: ''
        }
    }

    componentWillReceiveProps({user}) {
        if (user) 
            NavigationService.home.resetTo()
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
                                        onPress={() => Keyboard.dismiss() || tryLogin.call(this)}
                                        full/>
                                    <AnchorButtonComponent
                                        text={'Cadastrar-se'}
                                        onPress={register.bind(this)}
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
    AuthenticationService.login(user, password)
}

function register() {
    NavigationService
        .registration
        .navigateTo()
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

const mapStateToProps = ({user}) => ({
    user: user && user.user
})

const connectedScreen = connect(mapStateToProps)(LoginScreen)

export default connectedScreen