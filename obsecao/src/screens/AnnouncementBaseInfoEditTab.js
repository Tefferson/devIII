import React from 'react'
import { Dimensions, ImageBackground, Keyboard, StyleSheet, ListView, Text, View } from 'react-native'
import { HeaderComponent } from 'Components'
import {
    Container, Button, Content, Form, Input, Item, Label, ListItem, CheckBox, Body, Toast
} from 'native-base'
import { ButtonComponent } from 'Components'
import { FeedService, NavigationService } from 'Services'
import { Images } from 'Assets'
import { connect } from 'react-redux'

export default class AnnouncementBaseInfoEditTab extends React.Component {
    constructor(props) {
        super(props)

        this.params = [
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
        ]

        if (this.props.item) {
            this.state = {
                title: this.props.item.title,
                description: this.props.item.description,
                addressCountryName: this.props.item.addressCountryName,
                addressStateName: this.props.item.addressStateName,
                addressCityName: this.props.item.addressCityName,
                race: this.props.item.race,
                age: this.props.item.age,
                showRegistered: false,
                params: this.params
            }
        }
        else {
            this.state = {
                title: 'Carvão',
                description: null,
                addressCountryName: "Brazil",
                addressStateName: "Rio Grande do Sul",
                addressCityName: "São Leopoldo",
                race: null,
                age: null,
                showRegistered: false,
                params: this.params
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.item) {
            if (!nextProps.item.params) {
                nextProps.item.params = this.params
            }

            this.idAnnouncement = nextProps.item._id
    
            this.setState({
                title: nextProps.item.title,
                description: nextProps.item.description,
                addressCountryName: nextProps.item.addressCountryName,
                addressStateName: nextProps.item.addressStateName,
                addressCityName: nextProps.item.addressCityName,
                race: nextProps.item.race,
                age: nextProps.item.age,
                params: nextProps.item.params,
                showRegistered: false
            })
        }
    }

    onCheckBoxPress(value) {
        if (!this.state.params)
            return

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

    register() {
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

        return FeedService
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
    }

    update() {
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

        return FeedService
            .updateAnnouncement({
                _id: this.idAnnouncement,
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
    }

    render() {
        const { height } = Dimensions.get('window')
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        return (
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
                            onChangeText={title => this.setState({ title })}
                            autoCorrect={false} />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.label}>Descrição</Label>
                        <Input
                            style={styles.input}
                            value={this.state.description}
                            onChangeText={description => this.setState({ description })}
                            autoCorrect={false} />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.label}>Raça</Label>
                        <Input
                            style={styles.input}
                            value={this.state.race}
                            onChangeText={race => this.setState({ race })}
                            autoCorrect={false} />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.label}>Idade</Label>
                        <Input
                            style={styles.input}
                            value={this.state.age}
                            onChangeText={age => this.setState({ age })}
                            autoCorrect={false} />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.label}>Porte/Tamanho</Label>
                        <Input
                            style={styles.input}
                            value={this.state.size}
                            onChangeText={size => this.setState({ size })}
                            autoCorrect={false} />
                    </Item>
                    <Item>
                        <View style={styles.sectionOptions}>
                            <Text style={styles.label}>Selecione as opções:</Text>
                            <ListView
                                style={styles.listView}
                                enableEmptySections={true}
                                dataSource={ds.cloneWithRows(this.state.params)}
                                renderRow={(item, sectionID, index) =>
                                    <ListItem style={styles.listItem} key={index}>
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
                        </View>
                    </Item>
                </Form>
            </View>
        )
    }
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
    },
    sectionOptions: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }
})