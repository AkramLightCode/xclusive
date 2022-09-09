import React, { useEffect } from 'react';
import { Text, View, Image,StatusBar } from 'react-native'
import Images from '../assest/Images';
import { COLORS } from '../assest/Themes';

const Splesh = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Sign_in')
    }, 2000);
  }, [navigation]);

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