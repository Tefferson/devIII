import React from 'react'
import {Dimensions, Image, View, Text, StyleSheet} from 'react-native'
import {Button, CheckBox, Card, CardItem, Body, ListItem, Icon } from 'native-base'
import {HeaderComponent} from 'Components'
import {AuthenticationService} from 'Services'

export default class AnnouncementInfosTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }
    
    render() {
        return (
            <View style={styles.contentView}>
                <Text style={styles.titleText}>Olá, me chamo Bidu!</Text>
                <Card style={styles.cardContentView}>
                    <CardItem>
                        <Body>
                            <View style={styles.asideText}>
                                <Text style={styles.labelText}>Raça: </Text>
                                <Text style={styles.valueText}>Poodle</Text>
                            </View>
                            <View style={styles.asideText}>
                                <Text style={styles.labelText}>Idade: </Text>
                                <Text style={styles.valueText}>6 meses</Text>
                            </View>
                            <View style={styles.asideText}>
                                <Text style={styles.labelText}>Sexo: </Text>
                                <Text style={styles.valueText}>Macho</Text>
                            </View>
                            <View style={styles.asideText}>
                                <Text style={styles.labelText}>Porte físico: </Text>
                                <Text style={styles.valueText}>Pequeno</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
                <View>
                    <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt eros ac quam semper, semper placerat tellus malesuada. Nam eget hendrerit mi, in imperdiet eros. Mauris eget consectetur libero, at blandit felis. Vestibulum gravida nulla nisl, semper viverra nulla scelerisque nec. Nulla cursus ligula a ipsum malesuada, non facilisis ante laoreet.</Text>
                </View>
                <ListItem style={styles.listItem}>
                    <Icon name="md-checkmark" style={styles.checkedIcon} />
                    <Body>
                        <Text>Sou vacinado</Text>
                    </Body>
                </ListItem>
                <ListItem style={styles.listItem}>
                    <Icon name="md-checkmark" style={styles.checkedIcon} />
                    <Body>
                        <Text>Castrado</Text>
                    </Body>
                </ListItem>
                <ListItem style={styles.listItem}>
                <Icon name="md-checkmark" style={styles.checkedIcon} />
                    <Body>
                        <Text>Carinhoso</Text>
                    </Body>
                </ListItem>
                <ListItem style={styles.listItem}>
                    <Icon name="md-checkmark" style={styles.checkedIcon} />
                    <Body>
                        <Text>Não faço barulho</Text>
                    </Body>
                </ListItem>
                <ListItem style={styles.listItem}>
                    <Icon name="md-close" style={styles.uncheckedIcon} />
                    <Body>
                        <Text>Tenho boa higiene</Text>
                    </Body>
                </ListItem>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    listItem: {
        height: 20
    },
    checkedIcon: {
        width: 50,
        color: 'green'
    },
    uncheckedIcon: {
        width: 50,
        color: 'grey'
    },
    
    contentView: {
        flex: 1,
        margin: 10
    },
    cardContentView: {
        margin: 20
    },
    asideText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    labelText: {
        fontWeight: 'bold',
        fontSize: 16,
        width: 100
    },
    valueText: {
        fontSize: 16
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20
    },
    descriptionText: {
        fontSize: 19,
        padding: 20
    }

})