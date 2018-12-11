import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base'
import { Camera, Permissions, ImagePicker } from 'expo';

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async takePicture() {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();

      this.props.navigation.state.params.returnData(photo);
      this.props.navigation.goBack();
    }
  }

  async goBack() {
    this.props.navigation.goBack();
  }

  async openGallery() {
    let result = await ImagePicker.launchImageLibraryAsync();

    console.log(result);

    this.props.navigation.state.params.returnData(result);
    this.props.navigation.goBack();
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'flex-start',
                }}
                onPress={() => {
                  this.goBack()
                }}>
                <Icon name="md-arrow-back" style={{ fontSize: 34, marginBottom: 30, color: 'white' }} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.takePicture()
                }}>
                <Icon name="md-camera" style={{ fontSize: 34, marginBottom: 30, color: 'white' }} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end'
                }}
                onPress={() => {
                  this.openGallery()
                }}>
                <Icon name="md-photos" style={{ fontSize: 34, marginBottom: 30, color: 'white' }} />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}