import React, {useState} from 'react';
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
import Images from '../../assest/Images';
import {COLORS, FONTS} from '../../assest/Themes';
import CoustomButton from '../../Component/CoustomButton';
import InputCommon from '../../Component/InputCommon';

const ResetPassword = ({navigation}) => {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={Images.hederLogo} style={styles.Image} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: COLORS.black,
            alignSelf: 'center',
            marginTop: 10,
            lineHeight: 22,
            fontFamily: FONTS.bold,
          }}>
          Reset Password
        </Text>
        <View style={{marginTop: 20}}>
          <InputCommon
            value={newPassword}
            onChangeText={v => {
              setNewPassword(v);
            }}
            titelStyle={{marginBottom: 10}}
            istitle
            title="Enter New Password"
            height={50}
            placeHolder="Enter New Password"
            getfocus={() => {}}
          />
        </View>
        <View style={{marginTop: 20}}>
          <InputCommon
            value={confirmPassword}
            onChangeText={v => {
              setConfirmPassword(v);
            }}
            titelStyle={{marginBottom: 10}}
            istitle
            title="Confirm Password"
            placeHolder="Confirm Password"
            getfocus={() => {}}
          />
        </View>

        <LinearGradient
          style={{borderRadius: 7, marginTop: 30}}
          start={{x: 0, y: 0}}
          end={{x: 1.8, y: 0}}
          colors={['#FC0270', '#6B2063']}>
          <CoustomButton
            onPress={() => navigation.navigate('Sign_in')}
            title={'Save'}
            fontSize={16}
            lineHeight={22}
            fontWeight={500}
            color={COLORS.white}
            elevation={10}
            height={50}
          />
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
    backgroundColor:COLORS,
  },
  Image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 40,
  },
});

export default ResetPassword;
