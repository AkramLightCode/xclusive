import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Dimensions,
  // NativeModules,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoaderIndicator from '../../comman/LoaderIndicator';
import {setLoggedIn} from '../../utils/Preference';

import Images from '../../assest/Images';
import InputCommon from '../../Component/InputCommon';
import CoustomButton from '../../Component/CoustomButton';
import {COLORS, FONTS} from '../../assest/Themes';
import API from '../../services/API';
import Toast from 'react-native-simple-toast';
import {LOGIN_ENDPOINT} from '../../services/ApiEndpoints';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const {height, width} = Dimensions.get('window');

GoogleSignin.configure({});
// const { RNTwitterSignIn } = NativeModules;
const Sign_in = props => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
    } else {
      console.log('dsafsd');
      setLoding(true);
      const payload = {
        email: 'test10@gmail.com',
        password: '1234567890',
      };
      // console.log('payload', JSON.stringify(payload));
      API.post(LOGIN_ENDPOINT, payload)
        .then(res => {
          console.log('resresresresresresres', res);
          if (res.status === 'success') {
            Toast.show(res.message);
            setLoggedIn(res.data.access_token);
            console.log('Response =>' + JSON.stringify(res));
            setLoding(false);
            props.navigation.navigate('HomeStacksScreen', {screen: 'Home'});
          } else {
            setLoding(false);
          }
        })
        .catch(e => {
          setLoding(false);
          console.log(e);
          Toast.show('User not registered');
        });
      // props.navigation.navigate('HomeStacksScreen', {screen: 'Home'});
    }
  };

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.warn('userInfo', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error', error);
      } else {
        console.log('error', error);
      }
    }
  };

//   const APIKEY ={
//     TWITTER_API_KEY:"9anz12MFEHop58Cbde2PYpVvi",
//     TWITTER_SECRET_KEY:"Uskb9ISMtFISmBd6kmMnUY4FIpMoR2d15lsdDLvZ61AP74DMM9"
//   }

// const twitterLogin =() =>{
// RNTwitterSignIn.init(APIKEY.TWITTER_API_KEY,APIKEY.TWITTER_SECRET_KEY)
// RNTwitterSignIn.logIn().then(LoginData=>{
//   console.log('LoginData',LoginData);
// }).catch(error =>{
//   console.log('error',error);
// })
// }


  return (
    <ImageBackground
      source={Images.backgroundImage}
      resizeMode="stretch"
      style={{width: width / 1, height: height / 1}}>
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
          <TouchableOpacity
            style={styles.GTCommonContainer}
            onPress={googleLogin}>
            <Image source={Images.google} style={styles.CommonImage} />
            <Text style={styles.CommonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.GTCommonContainer}>
            <Image source={Images.twitter} style={styles.CommonImage} />
            <Text style={styles.CommonText}>Twitter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DontView}>
          <Text style={styles.DontText}>Don???t Have An Account?</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Registration');
            }}>
            <Text style={styles.SignUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <LoaderIndicator loading={loding} />
    </ImageBackground>
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
