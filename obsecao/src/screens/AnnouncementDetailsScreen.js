import React from 'react'
import { Dimensions, Image, View, Text, StyleSheet } from 'react-native'
import { Button, Container, Content, Icon, Tab, Tabs } from 'native-base'
import { HeaderComponent } from 'Components'
import { AuthenticationService, FeedService, GalleryService } from 'Services'
import AnnouncementInfosTab from './AnnouncementInfosTab'
import AnnouncementMessagesTab from './AnnouncementMessagesTab'
import AnnouncementPhotosTab from './AnnouncementPhotosTab'
import { colors } from 'Styles';

function renderRight() {
    return (
        <Button onPress={logout.bind(this)} transparent><Icon name={'exit'} /></Button>
    )
}

function logout() {
    AuthenticationService.logout()
}

export default class AnnouncementDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        let idAnnouncement = this.props.navigation.getParam("idAnnouncement");

        this.state = {
            item: {},
        };

        this.loadData(idAnnouncement)
    }

    loadData(idAnnouncement) {
        return FeedService.getAnnouncement(idAnnouncement)
            .then(announcement => {
                if (!announcement) announcement = {}
                this.setState({ item: announcement })
            })
    }

    gotInterested() {
        if (this.state.item) {
            if (this.state.item.favorite) {
                FeedService.removeFromFavorites(this.state.item._id).then(() => {
                    this.state.item.favorite = false
                    this.setState({item: this.state.item})
                })
            }
            else {
                FeedService.addAsFavorite(this.state.item._id).then(() => {
                    this.state.item.favorite = true
                    this.setState({item: this.state.item})
                })
            }
        }
    }

    adopt() {

    }

    render() {
        const { height } = Dimensions.get('window')
        const interestText = (this.state.item && this.state.item.favorite) ? "Não tenho interesse" : "Tenho interesse"

        return (
            <Container>
                <HeaderComponent title={'Announcements'} right={renderRight.bind(this)} />
                <Content scrollEnabled={true}>
                    <View style={styles.announcementHeader}>
                        <Image style={styles.announcementAvatar} source={GalleryService.getImageOrDefault(this.state.item.avatar)} style={{ width: 160, height: 160, borderRadius: 160 / 2 }}></Image>
                        <Text style={styles.announcementTitle}>{this.state.item.title}, {this.state.item.age}</Text>
                    </View>
                    <View style={styles.containerButtons}>
                        <Button style={styles.containerButton} onPress={() => this.gotInterested()}>
                            <Icon name='md-call' style={{ color: '#000' }} />
                            <Text>{interestText}</Text>
                        </Button>

                        <Button style={styles.containerButton} onPress={() => this.adopt()}>
                            <Icon name='md-paw' style={{ color: '#000' }} />
                            <Text>Adotar</Text>
                        </Button>
                    </View>

                    <View>
                        <Tabs>
                            <Tab heading="Infos">
                                <AnnouncementInfosTab item={this.state.item} />
                            </Tab>
                            <Tab heading="Fotos">
                                <AnnouncementPhotosTab item={this.state.item} />
                            </Tab>
                            <Tab heading="Mensagens">
                                <AnnouncementMessagesTab item={this.state.item} />
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
        backgroundColor: colors.light,
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
        paddingTop: 10,
        paddingBottom: 10,
        color: colors.black,
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
        color: colors.black,
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