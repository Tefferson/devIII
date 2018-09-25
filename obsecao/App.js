import React from 'react'
import RouterComponent from 'Router'
import { Font } from 'expo'

export default class App extends React.Component {
  state = {
    isReady: false
  }

  componentWillMount() {
    const fontAssets = cacheFonts([
      {
        Roboto: require('./assets/fonts/Roboto.ttf')
      }, {
        Roboto_medium: require('./assets/fonts/Roboto-Medium.ttf')
      }
    ])

    Promise
      .all([...fontAssets])
      .then(() => this.setState({isReady: true}))
  }

  render() {
    return this.state.isReady
      ? <RouterComponent/>
      : null
  }
}

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))