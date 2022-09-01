import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import Headers from '../comman/Headers';
import {COLORS} from '../assest/Themes';

export default function HelpSupport() {
  return (
    <View style={{flex: 1}}>
      {/* <Headers StatusBarBg={COLORS.bgColor} barStyle="dark-content" /> */}
      <WebView source={{uri: 'https://reactnative.dev/'}} />
    </View>
  );
}
const styles = StyleSheet.create({});
