import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import Images from '../assest/Images';
// "rgba(0,0,0,0.0)"
export default function Headers({
  onPress,
  search,
  onClick,
  styleSearch,
  bellStayle,
  StatusBarBg,
  barStyle,
  mainStyles,
  drawer
}) {
  return (
    <View style={[{backgroundColor: 'rgba(0,0,0,0.0)',paddingBottom:2},mainStyles]}>
      <StatusBar backgroundColor={StatusBarBg} barStyle={barStyle} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={Images.hederLogo}
            style={{
              height: 35,
              width: 35,
              resizeMode: 'contain',
              alignSelf: 'flex-start',
            }}
          />

          {drawer && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{marginLeft: 25, alignSelf: 'flex-end'}}>
              <Image
                source={require('../assest/icon/drawer.png')}
                style={{height: 25, width: 25, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
          {search && (
            <TouchableOpacity
              style={{marginRight: 30}}
              onPress={() => onClick}
              activeOpacity={0.5}>
              <Image
                source={Images.search}
                style={[
                  styleSearch,
                  {height: 20, width: 20, resizeMode: 'contain'},
                ]}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <Image
              source={Images.bell}
              style={[
                bellStayle,
                {
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  marginRight: 5,
                },
              ]}
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 12,
                backgroundColor: 'red',
                paddingVertical: 1,
                borderRadius: 10,
                fontSize: 8,
                paddingHorizontal: 4,
                left: 12,
                color: '#fff',
              }}>
              1
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
