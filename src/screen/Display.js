import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import Images from '../assest/Images';
import {useTheme, useThemeAwareObject} from '../theme';

export default function Display() {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.mainview}>
      <View style={styles.secondview}>
        <View>
          <Text style={styles.LanguageText}>Language</Text>
          <TextInput
            style={styles.InputContainer}
            placeholder="English"
            keyboardType="name-phone-pad"
            placeholderTextColor={theme.color.shadegray}
          />
        </View>
        <TouchableOpacity>
          <Image source={Images.Rightarrow} style={styles.Rightarrow} />
        </TouchableOpacity>
      </View>
      <View style={[styles.secondview, {marginTop: 15}]}>
        <View style={styles.DarkContainer}>
          <Text style={styles.DarkText}>Dark Theme</Text>
          <View>
            <Switch
              trackColor={{false: '#ccc', true: '#EC1E79'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    mainview: {
      backgroundColor: theme.color.backgroundColor,
      // padding: 10,
      marginTop: 10,
      marginHorizontal: 10,
      borderRadius: 7,
      padding: 20,
    },
    secondview: {
      borderWidth: 0.2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderRadius: 5,
      // marginTop: 15,
      backgroundColor: theme.color.backgroundColor,
      borderWidth: 0.5,
      borderColor: theme.color.borderColor2,
    },
    LanguageText: {
      fontFamily: FONTS.medium,
      color: theme.color.black,
      fontSize: 15,
      lineHeight: 20,
    },
    InputContainer: {
      color: theme.color.shadegray,
      // fontWeight: '400',
      fontSize: 15,
      fontFamily: FONTS.light,
    },
    Rightarrow: {
      width: 14,
      height: 14,
      resizeMode: 'contain',
      tintColor: theme.color.black,
    },
    DarkContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    DarkText: {
      fontFamily: FONTS.medium,
      color: theme.color.black,
      fontSize: 15,
      lineHeight: 20,
    },
  });
  return styles;
};
