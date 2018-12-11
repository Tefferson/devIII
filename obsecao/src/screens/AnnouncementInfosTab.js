import React from 'react'
import { Dimensions, Image, View, Text, StyleSheet } from 'react-native'
import { Button, CheckBox, Card, CardItem, Body, ListItem, Icon } from 'native-base'
import { HeaderComponent } from 'Components'
import { AuthenticationService } from 'Services'
import FeedService from '../services/FeedService';
import NavigationService from '../services/NavigationService';

export default class AnnouncementInfosTab extends React.Component {
    constructor(props) {
        super(props);
    }

    renderParams() {
        if (this.props.item.params) {
            return this.props.item.params.map((item, i) =>
                    <ListItem style={styles.listItem} key={i}
                    >
                        <Icon name={item.checked ? "md-checkmark" : "md-close"} style={item.checked ? styles.checkedIcon : styles.uncheckedIcon} />
                        <Body>
                            <Text>{item.value}</Text>
                        </Body>
                    </ListItem>                
            )
        }
    }

    render() {
        return (
            <View style={styles.contentView}>
                <Text style={styles.titleText}>Olá, me chamo {this.props.item.title}!</Text>
                <Card style={styles.cardContentView}>
                    <CardItem>
                        <Body>
                            <View style={styles.asideText}>
                                <Text style={styles.labelText}>Raça: </Text>
                                <Text style={styles.valueText}>{this.props.item.race}</Text>
                            </View>
                            <View style={styles.asideText}>
                                <Text style={styles.labelText}>Idade: </Text>
                                <Text style={styles.valueText}>{this.props.item.age}</Text>
                            </View>
                            <View style={styles.asideText}>
                                <Text style={styles.labelText}>Sexo: </Text>
                                <Text style={styles.valueText}>{this.props.item.sex}</Text>
                            </View>
                            <View style={styles.asideText}>
                                <Text style={styles.labelText}>Porte físico: </Text>
                                <Text style={styles.valueText}>{this.props.item.size}</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
                <View>
                    <Text style={styles.descriptionText}>{this.props.item.description}</Text>
                </View>
                {this.renderParams()}
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