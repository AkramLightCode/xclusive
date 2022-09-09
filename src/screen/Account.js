import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import Images from '../assest/Images';
import {useTheme, useThemeAwareObject} from '../theme';

export default function Account() {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme()

  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainview}>
          <View style={[styles.secondview, {marginTop: 0}]}>
            <View style={{flex: 1}}>
              <Text style={styles.inputHeading}>User Name</Text>
              <TextInput
                style={styles.input}
                placeholder="@peterbenedict19"
                placeholderTextColor={theme.color.shadegray}
                keyboardType="name-phone-pad"
              />
            </View>
            <TouchableOpacity>
              <Image source={Images.Rightarrow} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.secondview}>
            <View style={{flex: 1}}>
              <Text style={styles.inputHeading}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="peterbenedict19@dummy.com"
                placeholderTextColor={theme.color.shadegray}
                keyboardType="email-address"
              />
            </View>
            <TouchableOpacity>
              <Image source={Images.Rightarrow} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.secondview}>
            <View style={{flex: 1}}>
              <Text style={styles.inputHeading}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="+1 987 456 1234"
                placeholderTextColor={theme.color.shadegray}
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity>
              <Image source={Images.Rightarrow} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={styles.txt}>
          LINKED ACCOUNTS
        </Text>
        <View style={styles.mainview}>
          <View style={[styles.secondview, {marginTop: 0}]}>
            <View style={{flex: 1}}>
              <Text style={styles.inputHeading}>Twitter account</Text>
              <TextInput
                style={styles.input}
                placeholder="https://twitter/creators/dine-with-desi/"
                placeholderTextColor={theme.color.shadegray}
                keyboardType="twitter"
              />
            </View>
            <TouchableOpacity>
              <Image source={Images.Rightarrow} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.secondview}>
            <View style={{flex: 1}}>
              <Text style={styles.inputHeading}>Google Account</Text>
              <TextInput
                style={styles.input}
                placeholder="https://twitter/creators/dine-with-desi/"
                placeholderTextColor={theme.color.shadegray}
                keyboardType="twitter"
              />
            </View>
            <TouchableOpacity>
              <Image source={Images.Rightarrow} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={styles.txt}>
          SECURITY
        </Text>
        <View style={styles.mainview}>
          <View style={[styles.secondview, {marginTop: 0}]}>
            <View style={{flex: 1}}>
              <Text style={styles.inputHeading}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="*********"
                placeholderTextColor={theme.color.shadegray}
                keyboardType="name-phone-pad"
                secureTextEntry={true}
                maxLength={15}
              />
            </View>
            <TouchableOpacity>
              <Image source={Images.Rightarrow} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.secondview}>
            <View style={{flex: 1}}>
              <Text style={styles.inputHeading}>Login Session</Text>
              <TextInput
                style={styles.input}
                placeholder="Chrome 89.0, Windows 10"
                placeholderTextColor={COLORS.shadegray}
              />
            </View>
            <TouchableOpacity>
              <Image source={Images.Rightarrow} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    mainview: {
      backgroundColor: theme.color.backgroundColor,
      padding: 20,
      marginTop: 10,
      borderRadius: 7,
      marginBottom: 20,
    
      elevation:1
    },
    secondview: {
      borderWidth: 0.2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderRadius: 5,
      marginTop: 15,
      backgroundColor: theme.color.backgroundColor,
      borderWidth:0.5,
      borderColor:theme.color.borderColor2,
    },
    inputHeading: {
      fontFamily: FONTS.medium,
      color: theme.color.black,
      fontWeight: '500',
      fontSize: 15,
      lineHeight: 20,
    },
    input: {
      height: 40,
      flex: 1,
      fontWeight: '400',
      fontSize: 14,
      color: theme.color.shadegray,
      fontFamily: FONTS.light,
    },
    icon: {
      width: 14,
      height: 14,
      resizeMode: 'contain',
      tintColor:theme.color.black,
    },
    txt:{
      color: theme.color.black,
      fontSize: 16,
      lineHeight: 25,
      fontFamily: FONTS.medium,
    }
  });
  return styles;
};
