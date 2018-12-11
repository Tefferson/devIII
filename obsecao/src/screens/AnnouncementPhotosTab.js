import React from 'react'
import { Dimensions, Image, View, Text, StyleSheet } from 'react-native'
import { Button, Container, Content, Icon, Tab, Tabs } from 'native-base'
import { HeaderComponent } from 'Components'
import { GalleryService } from 'Services'
import PhotoBrowser from 'react-native-photo-browser';

export default class AnnouncementPhotosTab extends React.Component {
    static navigationOptions = {
        title: 'Fotos',
    };

    constructor(props) {
        super(props)

        this.state = {
            photos: []
        }

        this.loadPhotos();
    }

    loadPhotos() {
        if (this.props.item) {
            return GalleryService.getPhotos(this.props.item._id)
                .then(photos => {
                    let p = photos.map(item => { 
                        return { 
                            photo: GalleryService.getImageOrDefault(item)
                        }
                    });

                    this.setState({ photos: p })
                });
        }
    }

    _onSelectionChanged(media, index, selected) {
        alert(`${media.photo} selection status: ${selected}`);
    }

    _onActionButton(media, index) {
        alert(`handle sharing on android for ${media.photo}, index: ${index}`);
    }

    render() {
        return (
            <PhotoBrowser
                onBack={navigator.pop}
                mediaList={this.state.photos}
                initialIndex={0}
                displayNavArrows={true}
                displaySelectionButtons={false}
                displayActionButton={true}
                startOnGrid={true}
                enableGrid={true}
                useCircleProgress
                // onSelectionChanged={this.onSelectionChanged}
                // onActionButton={this.onActionButton}
                alwaysDisplayStatusBar={false}
                //customTitle={(index, rowCount) => `${index} sur ${rowCount}`}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        paddingTop: 54,
        paddingLeft: 16,
    },
    row: {
        flex: 1,
        padding: 8,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
    },
    rowTitle: {
        fontSize: 14,
    },
    rowDescription: {
        fontSize: 12,
    },
});