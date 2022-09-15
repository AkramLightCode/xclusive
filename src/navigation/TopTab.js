import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useRef} from 'react';

import Images from '../assest/Images';
import Headers from '../comman/Headers';
import {COLORS} from '../assest/Themes';
import {useTheme, useThemeAwareObject} from '../theme';

export default function TopTab({navigation}) {
  // const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();

  // const scrollRef = useRef();

  // const HomeTuch = () => {
  //   scrollRef.current.scrollTo({
  //     y: 5,
  //     animated: true,
  //   });
  // };

  return (
    <View
      style={{backgroundColor: theme.color.backgroundColor, elevation: 2}}
      // ref={scrollRef}
      >
      <Headers
        search={navigation.getState().index == 2 ? false : true}
        onClickSearch={() => {
          navigation.navigate('Search');
        }}
        onPress={() =>
          navigation.navigate('MyHomeStackScreens', {screen: 'Notifications'})
        }
        StatusBarBg={theme.color.backgroundColor}
        barStyle={
          theme.color.backgroundColor == '#ffffff'
            ? 'dark-content'
            : 'light-content'
        }
        bellStayle={{tintColor: theme.color.black}}
        styleSearch={{tintColor: theme.color.black}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyHomeStackScreens', {screen: 'Home'});
            // HomeTuch();
          }}>
          <Image
            source={Images.homeLogo}
            resizeMode="contain"
            style={[
              {height: 25, width: 25},
              navigation.getState().index == 0 ? {tintColor: COLORS.pink} : {},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabStack', {screen: 'NewPost'})}>
          <Image
            source={Images.addLogo}
            resizeMode="contain"
            style={[
              {height: 25, width: 25},
              navigation.getState().index == 1 ? {tintColor: COLORS.pink} : {},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabStack', {screen: 'Messages'})}>
          <Image
            source={Images.msgLogo}
            resizeMode="contain"
            style={[
              {height: 25, width: 25},
              navigation.getState().index == 2 ? {tintColor: COLORS.pink} : {},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabStack', {screen: 'Settings'})}>
          <Image
            source={Images.profileLogo}
            resizeMode="contain"
            style={[
              {height: 25, width: 25},
              navigation.getState().index == 3 ? {tintColor: COLORS.pink} : {},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabStack', {screen: 'Lists'})}>
          <Image
            source={Images.bottamArrow}
            resizeMode="contain"
            style={[{height: 25, width: 25}]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Image
            source={Images.menu}
            resizeMode="contain"
            style={{height: 25, width: 25}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
