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
import { useTheme, useThemeAwareObject } from '../theme';

export default function FansFollowing() {
  const styles = useThemeAwareObject(dashboardStyles);

  const {theme} = useTheme()

  return (
      <View style={styles.mainview}>
        <View style={styles.secondview}>
          <View>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontSize: 15,
                lineHeight: 20,
                color:theme.color.black
              }}>
              Following Price
            </Text>
            <TextInput
            placeholderTextColor={theme.color.shadegray}
              style={{
                color: theme.color.shadegray,
                fontWeight: '400',
                fontSize: 15,
                fontFamily: FONTS.light,
              }}
              placeholder="Free"
            />
          </View>
          <TouchableOpacity>
            <Image
              source={Images.Rightarrow}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                tintColor: theme.color.black,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
  );
}

const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    mainview: {
      backgroundColor: theme.color.backgroundColor,
      padding: 20,
      marginTop: 10,
      marginHorizontal: 10,
      borderRadius: 7,
  
    },
    secondview: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderRadius: 5,
      backgroundColor:theme.color.backgroundColor,
      borderWidth:0.5,
      borderColor:theme.color.borderColor2
    },
  });
  return styles;
};
