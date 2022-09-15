import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoaderIndicator from '../../comman/LoaderIndicator';
import {setLoggedIn} from '../../utils/Preference';

import Images from '../../assest/Images';
import InputCommon from '../../Component/InputCommon';
import CoustomButton from '../../Component/CoustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS} from '../../assest/Themes';
import API from '../../services/API';
import Toast from 'react-native-simple-toast';
import {LOGIN_ENDPOINT} from '../../services/ApiEndpoints';


const Sign_in = props => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('12345678');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loding, setLoding] = useState(false);

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
    }
     else {
      // console.log("dsafsd");
      // setLoding(true);
      // const payload = {
      //   email,
      //   password,
      // };
      // console.log('payload', JSON.stringify(payload));
      // API.post(LOGIN_ENDPOINT, payload)
      //   .then(res => {
      //     console.log(res);
      //     if (res.status === 'success') {
      //       Toast.show(res.message);
      //       setLoggedIn(res.data.access_token);
      //       console.log('Response =>' + JSON.stringify(res));
      //       setLoding(false);
      //       props.navigation.navigate('HomeStacksScreen', {screen: 'Home'});
      //     } else {
      //       setLoding(false);
      //     }
      //   })
      //   .catch(e => {
      //     setLoding(false);
      //     console.log(e);
      //     Toast.show('User not registered');
      //   });

      props.navigation.replace('HomeStacksScreen', {screen: 'Home'});
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <StatusBar backgroundColor={COLORS.bgColor} barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 20}}>
        <Image source={Images.hederLogo} style={styles.hederLogo} />
        <Text style={styles.SignInText}>Sign In</Text>
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
          <Text style={styles.ForgotText}>Forgot your password?</Text>
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

        <Text style={styles.OrText}>Or</Text>
        <View style={styles.GTContainer}>
          <TouchableOpacity style={styles.GTCommonContainer}>
            <Image source={Images.google} style={styles.CommonImage} />
            <Text style={styles.CommonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.GTCommonContainer}>
            <Image source={Images.twitter} style={styles.CommonImage} />
            <Text style={styles.CommonText}>Twitter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DontView}>
          <Text style={styles.DontText}>Don’t Have An Account?</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Registration');
            }}>
            <Text style={styles.SignUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <LoaderIndicator loading={loding} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hederLogo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
  },
  SignInText: {
    fontSize: 16,
    color: COLORS.dark,
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: FONTS.bold,
  },
  errorText: {
    color: 'red',
    marginLeft: 'auto',
    fontSize: 12,
    fontFamily: FONTS.Regular,
  },
  ForgotText: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 25,
    lineHeight: 20,
    color: COLORS.shade1,
    fontFamily: FONTS.Regular,
  },
  OrText: {
    fontSize: 14,
    color: COLORS.paynesgray,
    lineHeight: 20,
    fontFamily: FONTS.medium,
    textAlign: 'center',
  },
  GTContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  GoogleContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 7,
    paddingVertical: 10,
    flex: 0.5,
    justifyContent: 'center',
    marginRight: 10,
  },
  GTCommonContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 7,
    paddingVertical: 10,
    flex: 0.5,
    justifyContent: 'center',
    marginRight: 10,
  },
  CommonImage: {
    width: 20,
    height: 20,
  },
  CommonText: {
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    color: COLORS.Sandstone,
    fontFamily: FONTS.light,
  },
  DontView: {
    alignSelf: 'center',
    marginTop: 40,
    flexDirection: 'row',
    marginBottom: 30,
  },
  DontText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: FONTS.Regular,
    color: COLORS.gray3,
  },
  SignUpText: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.black,
    lineHeight: 20,
    fontFamily: FONTS.medium,
    marginLeft: 5,
  },
});

export default Sign_in;
