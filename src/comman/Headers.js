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
  onClickSearch
}) {
  return (
    <View style={[mainStyles, {backgroundColor: 'rgba(0,0,0,0.0)'}]}>
      <StatusBar backgroundColor={StatusBarBg} barStyle={barStyle} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <Image
          source={Images.hederLogo}
          style={{height: 30, width: 30, resizeMode: 'contain'}}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {search && (
            <TouchableOpacity
              style={{marginRight: 20}}
              onPress={() => {onClickSearch()}}
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
