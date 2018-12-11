import React from 'react'
import { Dimensions, Image, View, Text, StyleSheet } from 'react-native'
import { Button, Container, Content, Icon, Tab, Tabs } from 'native-base'
import { HeaderComponent } from 'Components'
import { AuthenticationService, FeedService, GalleryService } from 'Services'
import AnnouncementBaseInfoEditTab from './AnnouncementBaseInfoEditTab'
import AnnouncementMessagesTab from './AnnouncementMessagesTab'
import AnnouncementGalleryEditTab from './AnnouncementGalleryEditTab'
import { colors } from 'Styles';

export default class AnnouncementManagementScreen extends React.Component {
    constructor(props) {
        super(props);

        let idAnnouncement = this.props.navigation.getParam("idAnnouncement");

        this.state = {
            item: null,
            isEditing: false
        };

        if (idAnnouncement) {
            this.loadData(idAnnouncement)
        }
    }

    register() {
        if (this.state.isEditing) {
            this.refs.baseInfoForm.update().then(announcement => {
                this.setState({
                    item: announcement,
                    isEditing: true
                })
            })
        }
        else {
            this.refs.baseInfoForm.register().then(announcement => {
                this.setState({
                    item: announcement,
                    isEditing: true
                })
            })
        }
    }

    loadData(idAnnouncement) {
        return FeedService.getAnnouncement(idAnnouncement)
            .then(announcement => {
                this.state.isEditing = false

                if (announcement) {
                    this.state.isEditing = true
                }

                this.setState({ 
                    item: announcement,
                    isEditing: this.state.isEditing 
                })
            })
    }

    renderRight() {
        return (
            <Button onPress={() => this.register()}>
                <Text>Publicar</Text>
            </Button>
        )
    }

    render() {
        const { height } = Dimensions.get('window')

        let extraEditableOptions = null;

        if (this.state.isEditing) {
            extraEditableOptions = [
                <Tab heading="Fotos" key={1} >
                    <AnnouncementGalleryEditTab item={this.state.item} />
                </Tab>,
                <Tab heading="Curtidas" key={2} >
                    <AnnouncementMessagesTab item={this.state.item}/>
                </Tab>,
                <Tab heading="Mensagens" key={3} >
                    <AnnouncementMessagesTab item={this.state.item} />
                </Tab>
            ];
        }

        return (
            <Container>
                <HeaderComponent title={'Announcements'} right={() => this.renderRight()} />
                <Content scrollEnabled={true}>
                    <View>
                        <Tabs>
                            <Tab heading="Informações básicas" key={1}>
                                <AnnouncementBaseInfoEditTab ref='baseInfoForm' item={this.state.item} />
                            </Tab>
                            {extraEditableOptions}
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