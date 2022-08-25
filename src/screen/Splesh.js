import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native'
import Images from '../assest/Images';

const Splesh = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Sign_in')
    }, 2000);
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={Images.Splash}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
};

export default Splesh;