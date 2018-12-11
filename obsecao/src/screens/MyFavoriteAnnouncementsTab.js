import React from 'react'
import { Dimensions, Image, FlatList, View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { Button, Container, Content, Icon } from 'native-base'
import { HeaderComponent } from 'Components'
import { colors } from 'Styles';
import { NavigationService, FeedService, GalleryService } from 'Services'
import moment from 'moment'

export default class MyFavoriteAnnouncementsTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
        };

        this.loadFeed()
    }

    loadFeed() {

        return FeedService.getMyFavoriteAnnouncements()
            .then(feed => {
                if (!feed) feed = []
                this.setState({ dataSource: feed })
            })
    }


    render() {
        const { height } = Dimensions.get('window')

        return (
            <View>
                <FlatList contentContainerStyle={styles.announcementList}
                    numColumns={2}
                    data={this.state.dataSource}
                    renderItem={(rowData) => this.renderItem(rowData.item)}
                    keyExtractor={(item, index) => item._id}
                />
            </View>
        )
    }

    renderItem(rowData) {
        return (
            <TouchableHighlight onPress={goToNextScreen.bind(this, rowData._id)} style={styles.announcementView}>
                <View style={styles.announcementFullWidthView}>
                    <View style={styles.centerContent}>
                        <Image style={styles.announcementAvatar} source={GalleryService.getImageOrDefault(rowData.avatar)}></Image>
                        <Text style={styles.announcementTitle}>{rowData.title}, {rowData.age}</Text>
                    </View>
                    <View style={styles.infos}>
                        {/* <Text style={styles.announcementAge}>{rowData.race}</Text> */}
                        {/* <View>
                            <Text style={styles.announcementAge}>{rowData.age}</Text>
                            <Text style={styles.announcementAge}>{rowData.race}</Text>
                            <Text style={styles.announcementAge}>{rowData.size}</Text>
                        </View> */}
                        {/* <Text style={styles.announcementCreatedAt}>há {formatSince(rowData.createdAt)}</Text> */}
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}


function goToNextScreen(key) {
    NavigationService.announcementDetails.navigateTo({idAnnouncement: key})
}

function formatSince(date) {
    return FeedService.formatSince(moment(date));
}

var styles = StyleSheet.create({
    announcementList: {
        flex: 1,
        backgroundColor: colors.light,
    },
    announcementView: {
        margin: 5,
        padding: 5,
        flex: 1
    },
    announcementFullWidthView: {
        flex: 1
    },
    announcementAvatar: {
        width: 160,
        height: 160,
        borderRadius: 80
    },
    centerContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    announcementTitle: {
        fontSize: 18,
        color: colors.dark,
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingTop: 5
    },
    infos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingBottom: 10,
        paddingTop: 5
    },
    announcementCreatedAt: {
        fontSize: 14,
        width: 150,
        color: colors.dark,
    },
    announcementAge: {
        fontSize: 14,
        width: 110,
        color: colors.dark,
    },
});