import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import Images from '../assest/Images';
import Headers from '../comman/Headers';
import {COLORS} from '../assest/Themes';

export default function TopTab({navigation}) {
  {
    console.log('navigation.getState().index', navigation.getState().index);
  }
  return (
    <View style={{backgroundColor: COLORS.white, elevation: 2}}>
      <Headers
        search={navigation.getState().index == 2 ? false : true}
        onClickSearch={()=>{navigation.navigate('Search')}}
        onPress={() =>
          navigation.navigate('MyHomeStackScreens', {screen: 'Notifications'})
        }
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
          onPress={() =>
            navigation.navigate('MyHomeStackScreens', {screen: 'Home'})
          }>
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
