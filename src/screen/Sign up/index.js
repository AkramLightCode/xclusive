import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient';
import LoaderIndicator from '../../comman/LoaderIndicator';

import Images from '../../assest/Images';
import InputCommon from '../../Component/InputCommon';
import CoustomButton from '../../Component/CoustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS} from '../../assest/Themes';
import {useThemeAwareObject} from '../../theme';
import signUpStyles from './styles';
import API from '../../services/API';
import {LOGIN_ENDPOINT} from '../../services/ApiEndpoints';
import {setLoggedIn, setRegToken} from '../../utils/Preference';

const Sign_in = props => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('umat415@gmail.com');
  const [password, setPassword] = useState('12345678');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const styles = useThemeAwareObject(signUpStyles);
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    setShow(show => !show);
  };

  const onlogin = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == '') {
      setEmailError('Enter email');
    }
    if (password == '') {
      setPasswordError('Enter Password');
    } else if (reg.test(email) == false) {
      setEmailError('Enter Valid email');
    } else if (password.length < 8) {
      setPasswordError('Password Must Be 8 Charater');
    } else {
      setLoading(true);
      const payload = {
        email: email,
        password: password,
      };
      console.log('payload', JSON.stringify(payload));
      API.post(LOGIN_ENDPOINT, payload)
        .then(res => {
          setLoggedIn(res.data);
          setRegToken(res.data.access_token);
          console.log('res.data.user===========: ', res.data);
          console.log('\n\n\n\n\n Response =>' + JSON.stringify(res));
          props.navigation.replace('HomeStacksScreen', {screen: 'Home'});
          setLoading(false);
        })
        .catch(e => {
          setLoading(false);
          Toast.show('User not registered');
        });
    }
  };

  return (
    <SafeAreaView style={styles.continue}>
      <StatusBar backgroundColor={COLORS.bgColor} barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 20}}>
        <Image source={Images.hederLogo} style={styles.Image} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: COLORS.dark,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Sign In
        </Text>
        <View style={{marginTop: 20}}>
          <InputCommon
            value={email}
            onChangeText={v => {
              setEmail(v);
              setEmailError('');
            }}
            inputStyle={{marginTop: 25}}
            isLeftimg
            typeIcon={Images.email}
            height={50}
            placeHolder="Email"
            placeholderTextColor={COLORS.gray2}
            secureTextEntry={false}
            getfocus={() => {}}
            autoCapitalize="none"
            keyboardType={'email-addresss'}
          />
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}

          <InputCommon
            value={password}
            onChangeText={v => {
              setPassword(v);
              setPasswordError('');
            }}
            inputStyle={{marginTop: 25}}
            isLeftimg
            placeHolder="Password"
            typeIcon={Images.password}
            secureTextEntry={show == true ? false : true}
            height={50}
            placeholderTextColor={COLORS.shadepink}
            showIcon
            showpassIcon={show == true ? Images.eye : Images.showPassword}
            onPress={onClick}
          />
          {passwordError && (
            <Text style={styles.errorText}>{passwordError}</Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ResetPassword');
          }}>
          <Text
            style={{
              fontSize: 17,
              alignSelf: 'center',
              marginTop: 25,
              fontWeight: '400',
              lineHeight: 20,
              color: COLORS.shade1,
              fontFamily: FONTS.semiBold,
            }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
        <LinearGradient
          style={{marginVertical: 20, borderRadius: 7}}
          start={{x: 0, y: 0}}
          end={{x: 1.8, y: 0}}
          colors={['#FC0270', '#6B2063']}>
          <CoustomButton
            onPress={onlogin}
            title={'Sign In'}
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
          }}>
          Or
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              alignItems: 'center',
              borderRadius: 7,
              paddingVertical: 10,
              flex: 0.5,
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
              alignItems: 'center',
              borderRadius: 7,
              paddingVertical: 10,
              flex: 0.5,
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
          <Text
            style={{
              fontSize: 15,
              lineHeight: 20,
              fontWeight: '400',
              fontFamily: FONTS.semiBold,
              color: COLORS.gray3,
            }}>
            Don’t Have An Account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Registration');
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
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <LoaderIndicator loading={loading} />
    </SafeAreaView>
  );
};

export default Sign_in;
