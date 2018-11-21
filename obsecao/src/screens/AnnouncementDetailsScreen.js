import React from 'react'
import {Dimensions, Image, View, Text, StyleSheet} from 'react-native'
import {Button, Container, Content, Icon,  Tab, Tabs} from 'native-base'
import {HeaderComponent} from 'Components'
import {AuthenticationService} from 'Services'
import  AnnouncementInfosTab from './AnnouncementInfosTab'
import  AnnouncementMessagesTab  from './AnnouncementMessagesTab'
import  AnnouncementPhotosTab  from './AnnouncementPhotosTab'

const tmpSplash = require('../../assets/splash.png')

const data = [
    {
        title: 'Bidu',
        key: 1,
        createdAt: 'jun 2018',
        age: '3 anos',
        avatar: require('../../assets/images/dogs/1.jpg')
    },
    {
        title: 'Toco',
        key: 2,
        createdAt: 'ago 2018',
        age: '13 anos',
        avatar: require('../../assets/images/dogs/2.jpg')
    },
    {
        title: 'Derp',
        key: 3,
        createdAt: 'fev 2018',
        age: '5 anos',
        avatar: require('../../assets/images/dogs/3.jpg')
    },
    {
        title: 'Lady',
        key: 4,
        createdAt: 'jun 2018',
        age: '4 anos',
        avatar: require('../../assets/images/dogs/4.jpg')
    },
    {
        title: 'Zeferino',
        key: 5,
        createdAt: 'abr 2015',
        age: '3 anos',
        avatar: require('../../assets/images/dogs/5.jpg')
    },
    {
        title: 'Bengala',
        key: 6,
        createdAt: 'jul 2017',
        age: '3 meses',
        avatar: require('../../assets/images/dogs/6.jpg')
    },
    {
        title: 'Simba',
        key: 7,
        createdAt: 'jun 2018',
        age: '5 anos',
        avatar: require('../../assets/images/dogs/7.jpg')
    },
    {
        title: 'Nico',
        key: 8,
        createdAt: 'jun 2018',
        age: '4 meses',
        avatar: require('../../assets/images/dogs/8.jpg')
    },
    {
        title: 'Otto',
        key: 9,
        createdAt: 'jun 2018',
        age: '3 meses',
        avatar: require('../../assets/images/dogs/9.jpg')
    },
    {
        title: 'Cleo',
        key: 10,
        createdAt: 'jun 2018',
        age: '8 anos',
        avatar: require('../../assets/images/dogs/10.jpg')
    }
]

function renderRight() {
    return (
        <Button onPress={logout.bind(this)} transparent><Icon name={'exit'}/></Button>
    )
}

function logout() {
    AuthenticationService.logout()
}

export default class AnnouncementDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: data[0],
        };
    }
    
    render() {
        const {height} = Dimensions.get('window')

        return (
            <Container>
                <HeaderComponent title={'Announcements'} right={renderRight.bind(this)}/>
                <Content scrollEnabled={true}>
                    <View style={styles.announcementHeader}>
                        <Image style={styles.announcementAvatar} source={this.state.item.avatar} style={{width: 160, height: 160, borderRadius: 160/2}}></Image>
                        <Text style={styles.announcementTitle}>{this.state.item.title}</Text>
                        <Text style={styles.announcementAge}>{this.state.item.age}</Text>
                    </View>
                    <View style={styles.containerButtons}>
                        <Button style={styles.containerButton}>
                            <Icon name='md-call' style={{color: '#000'}} />
                            <Text>Contato</Text>
                        </Button>

                        <Button style={styles.containerButton}>
                            <Icon name='md-paw' style={{color: '#000'}} />
                            <Text>Adotar</Text>
                        </Button>
                    </View>

                    <View>
                        <Tabs>
                            <Tab heading="Infos">
                                <AnnouncementInfosTab />
                            </Tab>
                            <Tab heading="Fotos">
                                <AnnouncementPhotosTab />
                            </Tab>
                            <Tab heading="Mensagens">
                                <AnnouncementMessagesTab />
                            </Tab>
                        </Tabs>
                    </View>
                </Content>
            </Container>
        )
    }
}

var styles = StyleSheet.create({
    
    announcementHeader: {
        flex: 1,
        height: 230,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    announcementContent: {
        margin: 5,
        padding: 10,
        flex: 1
    },
    roundedButton: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    announcementAvatar: {
        width: 160,
        height: 160
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    announcementTitle: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    infos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    announcementDescription: {
        fontSize: 18
    },
    announcementCreatedAt: {
        fontSize: 14,
        color: 'white',
    },
    announcementAge: {
        fontSize: 14,
        color: 'white',
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    containerButton: {
        backgroundColor: 'white',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    containerButtonText: {
        flex: 1,
        textAlign: 'center'
    }
});