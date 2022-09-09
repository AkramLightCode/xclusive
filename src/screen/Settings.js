import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import EditProfile from '../Component/EditProfile';
import Account from './Account';
import FansFollowing from './FansFollowing';
import Display from './Display';
import {WebView} from 'react-native-webview';
import HelpSupport from './HelpSupport';
import {useTheme, useThemeAwareObject} from '../theme';

export default function Settings({navigation}) {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();
  const [active, setActive] = useState(1);
  const onPress = v => {
    setActive(v);
  };
  return (
    <View style={styles.Container}>
      <View style={{borderTopColor: theme.color.light, borderTopWidth: 0.5}} />

      <View style={styles.MainView}>
        <Text style={styles.SettingText}>Setting</Text>
        <View style={styles.TopButtonView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => onPress(1)}
              style={{
                backgroundColor: active == 1 ? COLORS.pink : COLORS.bgColor,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginHorizontal: 5,
              }}>
              <Text
                style={[
                  styles.buttonText,
                  {color: active == 1 ? COLORS.white : COLORS.sblack},
                ]}>
                Edit Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress(2)}
              style={{
                backgroundColor: active == 2 ? COLORS.pink : COLORS.bgColor,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginHorizontal: 5,
              }}>
              <Text
                style={[
                  styles.buttonText,
                  {color: active == 2 ? COLORS.white : COLORS.sblack},
                ]}>
                Account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress(3)}
              style={{
                backgroundColor: active == 3 ? COLORS.pink : COLORS.bgColor,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginHorizontal: 5,
              }}>
              <Text
                style={[
                  styles.buttonText,
                  {color: active == 3 ? COLORS.white : COLORS.sblack},
                ]}>
                Privcy & Safety
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress(4)}
              style={{
                backgroundColor: active == 4 ? COLORS.pink : COLORS.bgColor,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginHorizontal: 5,
              }}>
              <Text
                style={[
                  styles.buttonText,
                  {color: active == 4 ? COLORS.white : COLORS.sblack},
                ]}>
                Fans & Following
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress(5)}
              style={{
                backgroundColor: active == 5 ? COLORS.pink : COLORS.bgColor,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginHorizontal: 5,
              }}>
              <Text
                style={[
                  styles.buttonText,
                  {color: active == 5 ? COLORS.white : COLORS.sblack},
                ]}>
                Notifications
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress(6)}
              style={{
                backgroundColor: active == 6 ? COLORS.pink : COLORS.bgColor,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginHorizontal: 5,
              }}>
              <Text
                style={[
                  styles.buttonText,
                  {color: active == 6 ? COLORS.white : COLORS.sblack},
                ]}>
                Display
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress(7)}
              style={{
                backgroundColor: active == 7 ? COLORS.pink : COLORS.bgColor,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginHorizontal: 5,
              }}>
              <Text
                style={[
                  styles.buttonText,
                  {color: active == 7 ? COLORS.white : COLORS.sblack},
                ]}>
                What’s New
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      {active == 1 && <EditProfile />}
      {active == 2 && <Account />}
      {active == 3 && (
        <WebView
          source={{
            uri: 'https://reactnative.dev/',
          }}
        />
      )}

      {active == 4 && <FansFollowing />}
      {active == 6 && <Display />}
      {/* </ScrollView> */}
    </View>
  );
}
const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: theme.color.bgColor,
    },
    MainView: {
      backgroundColor: theme.color.backgroundColor,
      paddingVertical: 10,
      // marginTop: 0.7,
    },
    SettingText: {
      fontSize: 22,
      color: theme.color.black,
      marginHorizontal: 10,
      fontFamily: FONTS.semiBold,
      lineHeight: 30,
    },
    TopButtonView: {
      flexDirection: 'row',
      marginHorizontal: 5,
      marginTop: 10,
    },

    cameraview: {
      width: 35,
      height: 35,
      backgroundColor: 'white',
      borderRadius: 35 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
      margin: 10,
    },
    Profileveiw: {
      borderWidth: 5,
      borderColor: '#EC1E79',
      borderRadius: 120,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      paddingHorizontal: 7,
      paddingVertical: 7,
      top: -60,
    },
    buttonText: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: FONTS.Regular,
    },
  });
  return styles;
};
