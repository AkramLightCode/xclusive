import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import EditProfile from '../Component/EditProfile';
import Account from './Account';
import FansFollowing from './FansFollowing';
import Display from './Display';
import {WebView} from 'react-native-webview';
import {useTheme, useThemeAwareObject} from '../theme';

export default function Settings({navigation}) {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();

  const [activeButton, setActiveButton] = useState(
    'Edit Profile',
    'Account',
    'Privcy & Safety',
    'Fans & Following',
    'Notifications',
    'Display',
    'What’s New',
  );
  const onChangButton = item => {
    setActiveButton(item);
  };

  const buttonData = [
    {title: 'Edit Profile'},
    {title: 'Account'},
    {title: 'Privcy & Safety'},
    {title: 'Fans & Following'},
    {title: 'Notifications'},
    {title: 'Display'},
    {title: 'What’s New'},
  ];

  const buttonItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onChangButton(item.title)}
        style={[
          styles.buttonContainer,
          {
            backgroundColor:
              item.title == activeButton ? COLORS.pink : COLORS.bgColor,
          },
        ]}>
        <Text
          style={[
            styles.buttonText,
            {color: item.title == activeButton ? COLORS.white : COLORS.sblack},
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.Container}>
      <View style={{borderTopColor: theme.color.light, borderTopWidth: 0.5}} />
      <View style={styles.MainView}>
        <Text style={styles.SettingText}>Setting</Text>
        <View style={styles.TopButtonView}>
          <FlatList
            horizontal
            data={buttonData}
            renderItem={buttonItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      {activeButton == 'Edit Profile' && <EditProfile />}
      {activeButton == 'Account' && <Account />}
      {activeButton == 'Privcy & Safety' && (
        <WebView
          source={{
            uri: 'https://reactnativeguides.com/terms-and-conditions/',
          }}
        />
      )}

      {activeButton == 'Fans & Following' && <FansFollowing />}
      {activeButton == 'Display' && <Display />}
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
    buttonContainer: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginHorizontal: 5,
    },
    buttonText: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: FONTS.Regular,
    },
  });
  return styles;
};
