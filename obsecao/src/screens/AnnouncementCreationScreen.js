import React from 'react'
import {Dimensions, ImageBackground, Keyboard, StyleSheet, ListView, Text, View} from 'react-native'
import {HeaderComponent} from 'Components'
import {
    Container,Button,Content,Form,Input,Item,Label,ListItem, CheckBox, Body,Toast
} from 'native-base'
import {ButtonComponent} from 'Components'
import {FeedService, NavigationService} from 'Services'
import {Images} from 'Assets'
import {connect} from 'react-redux'

class AnnouncementCreationScreen extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            title: 'tefferson',
            description: "Pequeno cachorro malhado em busca de um novo lar",
            addressCountryName: "Brazil",
            addressStateName: "Rio Grande do Sul",
            addressCityName: "São Leopoldo",
            race: "Vira-lata",
            age: "9 meses",
            params: [
                { value: "Carinhoso", checked: false },
                { value: "Dócil", checked: false },
                { value: "Carente", checked: false },
                { value: "Sociável", checked: false },
                { value: "Vermefugado", checked: false },
                { value: "Castrado", checked: false },
                { value: "Gosta de brincar", checked: false },
                { value: "Gosta de gatos", checked: false },
                { value: "Não é violento", checked: false },
                { value: "Gosta de crianças", checked: false },
                { value: "Protege o lar", checked: false }
            ],
            showRegistered: false
        }
    }

    openCamera() {
        NavigationService.camera.navigateTo({returnData: this.returnData.bind(this)});
    }

    returnData(photo) {
        debugger;
    }

    onCheckBoxPress(value) {
        let params = this.state.params.map((item) => {
            if (value == item.value) {
                item.checked = !item.checked
            }

            return item
        });

        this.setState({
            params: params
        });
    }

    render() {
        const {height} = Dimensions.get('window')
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return (
            <Container>
                <HeaderComponent title={'Edição de anúncio'} />
                <Content scrollEnabled={true}>
                    <View
                        style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <Form style={styles.form}>
                            <Item floatingLabel>
                                <Label style={styles.label}>Nome do cão</Label>
                                <Input
                                    style={styles.input}
                                    value={this.state.title}
                                    onChangeText={title=> this.setState({title})}
                                    autoCorrect={false}/>
                            </Item>
                            <Item floatingLabel>
                                <Label style={styles.label}>Descrição</Label>
                                <Input
                                    style={styles.input}
                                    value={this.state.description}
                                    onChangeText={description => this.setState({description})}
                                    autoCorrect={false}/>
                            </Item>
                            <Item floatingLabel>
                                <Label style={styles.label}>Raça</Label>
                                <Input
                                    style={styles.input}
                                    value={this.state.race}
                                    onChangeText={race => this.setState({race})}
                                    autoCorrect={false}/>
                            </Item>
                            <Item floatingLabel>
                                <Label style={styles.label}>Idade</Label>
                                <Input
                                    style={styles.input}
                                    value={this.state.age}
                                    onChangeText={age => this.setState({age})}
                                    autoCorrect={false}/>
                            </Item>
                            <Item floatingLabel>
                                <Label style={styles.label}>Porte/Tamanho</Label>
                                <Input
                                    style={styles.input}
                                    value={this.state.size}
                                    onChangeText={size => this.setState({size})}
                                    autoCorrect={false}/>
                            </Item>
                            <Item>
                                <View style={{display: 'flex',flexDirection: 'column'}}>
                                    <Text style={styles.label}>Selecione as opções:</Text>
                                </View>
                                <ListView
                                    enableEmptySections={true} 
                                    dataSource={ds.cloneWithRows(this.state.params)}
                                    renderRow={(item) =>
                                        <ListItem style={styles.listItem}>
                                            <CheckBox 
                                                checked={item.checked}
                                                onPress={() => this.onCheckBoxPress(item.value)}
                                            />
                                            <Body>
                                                <Text>{item.value}</Text>
                                            </Body>
                                        </ListItem>
                                    }
                                />
                            </Item>

                            <View style={styles.buttonContainer}>
                                <ButtonComponent onPress={() => this.openCamera()} text={"Tirar foto"} full />
                            </View>
                            
                            <View style={styles.buttonContainer}>
                                <ButtonComponent
                                    text={'Cadastrar'}
                                    onPress={() => Keyboard.dismiss() || register.call(this)}
                                    full/>
                            </View>
                        </Form>
                    </View>
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
        title,
        description,
        addressCountryName,
        addressStateName,
        addressCityName,
        race,
        age,
        params
    } = this.state

    FeedService
        .registerAnnouncement({
            title,
            description,
            address: {
                countryName: addressCountryName,
                stateName: addressStateName,
                cityName: addressCityName
            },
            race,
            age,
            params
        })
        .then(() => this.setState({showRegistered: true}))
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20
    },
    form: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
    },
    input: {
        color: 'white'
    },
    text: {
        flex: 1,
    },
    label: {
        color: 'white',
        flex: 1,
    },
    listItem: {
        flexDirection: 'row',
        flex: 1,
        height: 30
    }
})

const connectedScreen = connect(null)(AnnouncementCreationScreen)

export default connectedScreen