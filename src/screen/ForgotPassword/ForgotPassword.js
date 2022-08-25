import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Images from '../../assest/Images';
import styles from '../Sign up/styles';

const ForgotPassword = props => {
  return (
    <View style={{flex: 1}}>
      <Image source={Images.hederLogo} style={styles.Image} />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        Forgot Password
      </Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  Image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
  },
});
export default ForgotPassword;
