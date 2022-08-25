import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-simple-toast';

import Images from '../../assest/Images';
import {COLORS, FONTS} from '../../assest/Themes';
import CoustomButton from '../../Component/CoustomButton';
import InputCommon from '../../Component/InputCommon';

const Registration = props => {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');

  const onClick = () => {
    setShow(show => !show);
  };

  const onlogin = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == '') {
      setEmailError('Enter Email.');
    }
    if (password == '') {
      setPasswordError('Enter Password.');
    }
    if (name == '') {
      setNameError('Enter name.');
    } else if (reg.test(email) == false) {
      setEmailError('Check Email.');
    } else if (name.length < 8) {
      setPasswordError('Password Must Be 8 Charater');
    } else {
      props.navigation.navigate('HomeStacksScreen', {screen: 'Home'});
    }
  };

  return (
    <SafeAreaView style={Styles.continue}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={Images.hederLogo} style={Styles.Image} />
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22,
            fontWeight: '600',
            color: COLORS.black,
            alignSelf: 'center',
            marginTop: 10,
            fontFamily: FONTS.bold,
          }}>
          Sign up
        </Text>
        <InputCommon
          keyboardType="email-addresss"
          value={email}
          onChangeText={v => {
            setEmail(v);
            setEmailError('');
          }}
          inputStyle={{marginTop: 20}}
          isLeftimg
          typeIcon={Images.email}
          placeHolder="Email"
        />
        {emailError && <Text style={Styles.errorText}>{emailError}</Text>}
        <InputCommon
          value={password}
          onChangeText={v => {
            setPassword(v);
            setPasswordError('');
          }}
          secureTextEntry={show == true ? false : true}
          showIcon
          isLeftimg
          showpassIcon={show == true ? Images.eye : Images.showPassword}
          onPress={onClick}
          inputStyle={{marginTop: 20}}
          typeIcon={Images.password}
          placeHolder="Password"
        />
        {passwordError && <Text style={Styles.errorText}>{passwordError}</Text>}
        <InputCommon
          returnKeyType={'done'}
          value={name}
          onChangeText={v => {
            setName(v);
            setNameError('');
          }}
          inputStyle={{marginTop: 20}}
          isLeftimg
          typeIcon={Images.profileIcon}
          height={50}
          placeHolder="Name"
        />
        {nameError && <Text style={Styles.errorText}>{nameError}</Text>}

        <LinearGradient
          style={{borderRadius: 7, marginTop: 30}}
          start={{x: 0, y: 0}}
          end={{x: 1.8, y: 0}}
          colors={['#FC0270', '#6B2063']}>
          <CoustomButton
            onPress={onlogin}
            title={'Sign Up'}
            fontSize={16}
            lineHeight={22}
            fontWeight={500}
            color={COLORS.white}
            elevation={10}
            height={50}
          />
        </LinearGradient>

        <Text
          style={{
            fontSize: 14,
            color: COLORS.paynesgray,
            fontWeight: '600',
            lineHeight: 20,
            fontFamily: FONTS.medium,
            textAlign: 'center',
            marginTop: 20,
          }}>
          Or
        </Text>

        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: 7,
              paddingVertical: 10,
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}>
            <Image source={Images.google} style={{width: 20, height: 20}} />
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 20,
                color: COLORS.Sandstone,
                fontFamily: FONTS.light,
              }}>
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: 7,
              paddingVertical: 10,
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <Image source={Images.twitter} style={{width: 20, height: 20}} />
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 20,
                color: COLORS.Sandstone,
                fontFamily: FONTS.light,
              }}>
              Twitter
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 40,
            flexDirection: 'row',
            marginBottom: 30,
          }}>
          <Text style={{fontSize: 15, lineHeight: 20, color: COLORS.gray}}>
            Don’t have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Sign_in');
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: COLORS.black,
                lineHeight: 20,
                fontFamily: FONTS.medium,
                marginLeft: 5,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  continue: {
    flex: 1,
    marginHorizontal: 20,
  },
  Image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
  },
  errorText: {
    color: 'red',
    marginLeft: 'auto',
    fontSize: 12,
    fontFamily: FONTS.medium,
  },
});
export default Registration;
