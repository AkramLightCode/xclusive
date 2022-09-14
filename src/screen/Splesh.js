import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import Images from '../assest/Images';
import {getLoggedIn, getRegToken} from '../utils/Preference';
import { COLORS } from '../assest/Themes';

const Splesh = ({navigation}) => {
  useEffect(() => {
    getDataToken();
  }, [navigation]);

  const getDataToken = async () => {
    try {
      const token = await getRegToken();
      console.log('=====token: ', token);
      if (token) {
        setTimeout(() => {
          // navigation.replace('Home');
          navigation.replace('HomeStacksScreen', {screen: 'Home'});
        }, 2000);
      } else {
        setTimeout(() => {
          navigation.replace('Sign_in');
        }, 2000);
      }
    } catch (e) {
      console.log('=====e: ', e);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.bgColor} barStyle='dark-content' />
      <Image
        source={Images.Splash}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
};

export default Splesh;
