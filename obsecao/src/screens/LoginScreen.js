import React from 'react'
import {View} from 'react-native'
import {
    Container,
    Content,
    Form,
    Input,
    Item,
    Label
} from 'native-base'
import {ButtonComponent} from 'Components'
import {NavigationService} from 'Services'

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: ''
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <Form floatingLabel>
                            <Item>
                                <Label>Usuário</Label>
                                <Input
                                    value={this.state.user}
                                    onChangeText={user => this.setState({user})}
                                    autoCorrect={false}/>
                            </Item>
                            <Item>
                                <Label>Senha</Label>
                                <Input
                                    value={this.state.password}
                                    onChangeText={password => this.setState({password})}
                                    autoCorrect={false}/>
                            </Item>
                            <View>
                                <ButtonComponent text={'Entrar'} onPress={tryLogin.bind(this)} full/>
                            </View>
                        </Form>
                    </View>
                </Content>
            </Container>
        )
    }
}

function tryLogin() {
    console.log()
    NavigationService
        .home
        .navigateTo()
}