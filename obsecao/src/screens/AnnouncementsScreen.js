import React from 'react'
import {Dimensions, Image, FlatList, View, Text, StyleSheet} from 'react-native'
import {Button, Container, Content, Icon} from 'native-base'
import {HeaderComponent} from 'Components'
import {AuthenticationService} from 'Services'

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

export default class AnnouncementsScreen extends React.Component {
    constructor(props) {
        super(props);

        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: data,
        };
    }
    
    render() {
        const {height} = Dimensions.get('window')

        return (
            <Container>
                <HeaderComponent title={'Announcements'} right={renderRight.bind(this)}/>
                <Content scrollEnabled={true}>
                    <FlatList contentContainerStyle={styles.announcementList}
                        numColumns={2}
                        data={this.state.dataSource}
                        renderItem={(rowData) => this.renderItem(rowData.item)}
                    />
                </Content>
            </Container>
        )
    }

    renderItem(rowData) {
        return (
            <View style={styles.announcementView}>
                <View style={styles.avatar}>
                    <Image style={styles.announcementAvatar} source={rowData.avatar}></Image>
                </View>
                <Text style={styles.announcementTitle}>{rowData.title}</Text>
                <View style={styles.infos}>
                    <Text style={styles.announcementAge}>{rowData.age}</Text>
                    <Text style={styles.announcementCreatedAt}>{rowData.createdAt}</Text>
                </View>
                
            </View>
        )
    }
}

var styles = StyleSheet.create({
    
    announcementList: {
        flex: 1
    },
    announcementView: {
        backgroundColor: 'green',
        margin: 5,
        padding: 5,
        flex: 1,
        height: 220
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
    announcementCreatedAt: {
        fontSize: 14,
        width: 130,
        color: 'white',
    },
    announcementAge: {
        fontSize: 14,
        width: 110,
        color: 'white',
    },
});