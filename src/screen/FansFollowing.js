import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import Images from '../assest/Images';

export default function FansFollowing() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.mainview}>
        <View style={styles.secondview}>
          <View>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 20,
              }}>
              Following Price
            </Text>
            <TextInput
              style={{ color: COLORS.shadegray,
                fontWeight: '400',
                fontSize: 15,
                fontFamily: FONTS.light,}}
              placeholder="Free"
              
            />
          </View>
          <TouchableOpacity>
            <Image
              source={Images.Rightarrow}
              style={{width: 15, height: 15, resizeMode: 'contain',tintColor:COLORS.BL}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: COLORS.white,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 7,
    paddingVertical: 20,
  },
  secondview: {
    borderWidth: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
  },
});
