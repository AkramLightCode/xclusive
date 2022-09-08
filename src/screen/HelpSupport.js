import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
import Headers from '../comman/Headers';
import { COLORS } from '../assest/Themes';



export default class HelpSupport extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:COLORS.white}}>
        <Headers
        barStyle ='dark-content'
        StatusBarBg={COLORS.white}
        />
        <WebView source={{ uri: 'https://reactnative.dev/' }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
