import React from 'react'
import { Dimensions, Image, FlatList, StyleSheet, ListView, TouchableHighlight, View } from 'react-native'
import { GalleryService, NavigationService } from 'Services'
import { Container, Content } from 'native-base'
import { ButtonComponent } from 'Components'
import { colors } from 'Styles'
import { connect } from 'react-redux'

class AnnouncementGalleryEditTab extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photos: []
        }

        if(this.props.item) {

            this.idAnnouncement = this.props.item._id;

            this.loadPhotos()
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.item) {

            this.idAnnouncement = nextProps.item._id;

            this.loadPhotos()
        }    
    }

    loadPhotos() {

        return GalleryService.getPhotos(this.idAnnouncement)
            .then(photos => {
                let p = photos.map(item => {
                    return {
                        photo: this.getImage(photo.image)
                    }
                });

                this.setState({ photos: p })
            });
    }

    openCamera() {
        NavigationService.camera.navigateTo({ returnData: this.returnData.bind(this) });
    }

    returnData(photo) {
        var photos = []

        this.state.photos.map(item => {
            photos.push(item)
        })

        GalleryService.uploadPhoto(this.idAnnouncement, photo).then(photo => {
            photos.push(photo)

            this.setState({ photos: photos })
        });
    }

    removePhoto(photo) {
        var photos = [];

        GalleryService.removePhoto(photo).then(() => {
            this.state.photos.map(item => {
                if (item._id != photo._id)
                    photos.push(item)
            })

            this.setState({ photos: photos })
        });
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

    renderItem(data) {
        const { height, width } = Dimensions.get('window')
        data.height = (width / 3)
        data.width = (width / 3)

        return (
            <View style={styles.announcementView}>
                <View style={styles.announcementFullWidthView}>
                    <Image style={styles.thumb} source={GalleryService.getImageOrDefault(data)} style={{ width: data.width, height: data.height }} />
                    <ButtonComponent onPress={() => this.removePhoto(data)} text="Excluir" />
                </View>
            </View>
        )
    }

    render() {
        const { height } = Dimensions.get('window')
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        return (
            <Container>
                <Content scrollEnabled={true}>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                        <View style={styles.buttonContainer}>
                            <ButtonComponent onPress={() => this.openCamera()} text={"Adicionar foto"} full />
                        </View>

                        <FlatList contentContainerStyle={styles.announcementList}
                            numColumns={3}
                            data={this.state.photos}
                            renderItem={(rowData) => {
                                return this.renderItem(rowData.item)
                            }}
                            keyExtractor={(item, index) => item._id}
                        />

                        <View style={styles.buttonContainer}>
                            <ButtonComponent onPress={() => NavigationService.home.navigateTo()} text={"Concluir"} full />
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

function register() {

}

const styles = StyleSheet.create({
    announcementList: {
        flex: 1,
        backgroundColor: colors.light,
    },
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
    imageView: {
        flex: 1,
        margin: 5,
        padding: 5,
        borderColor: 'green'
    },
    thumb: {
        width: 160,
        height: 160
    },
    announcementView: {
        margin: 5,
        padding: 5,
        flex: 1
    },
    announcementFullWidthView: {
        flex: 1
    },
})

const connectedScreen = connect(null)(AnnouncementGalleryEditTab)

export default connectedScreen