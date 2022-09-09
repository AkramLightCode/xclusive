import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../assest/Images';
import InputCommon from './InputCommon';
import CoustomButton from './CoustomButton';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../assest/Themes';
import {useTheme, useThemeAwareObject} from '../theme';
import {color} from 'react-native-reanimated';

export default function EditProfile() {
  const styles = useThemeAwareObject(dashboardStyles);

  const [userName, setUserName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  const OpenGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  const OpenPicker = () => {
    Alert.alert('Salect Image', '', [
      {
        text: 'Camera',
        onPress: () => openCamera(),
      },
      {
        text: 'Gallery',
        onPress: () => OpenGallery(),
      },
      {text: 'Cancel', onPress: () => 'Cancel'},
    ]);
  };

  const {theme} = useTheme();

  return (
    <View style={{backgroundColor: theme.color.backgroundColor, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 50}}>
          <ImageBackground
            resizeMode="stretch"
            source={Images.profileimg}
            style={{width: '100%', height: 196, marginTop: 5}}>
            <View style={styles.cameraview}>
              <Image
                source={Images.camera}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            </View>

            <View>
              <View style={{bottom: -85}}>
                <Image
                  source={image ? {uri: image} : Images.profile}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    borderColor: '#EC1E79',
                    borderWidth: 5,
                  }}
                />
                <TouchableOpacity activeOpacity={0.7} onPress={OpenPicker}>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                      position: 'absolute',
                      bottom: -14,
                    }}
                    source={Images.bgcamera}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            flex: 1,
            paddingBottom: 20,
            marginTop: 50,
          }}>
          <InputCommon
            inputStyle={styles.input}
            placeHolder="User Name"
            value={userName}
            onChangeText={v => setUserName(v)}
            textStyle={{color: theme.color.gray}}
            placeholderTextColor={theme.color.gray}
          />

          <InputCommon
            value={displayName}
            onChangeText={v => setDisplayName(v)}
            inputStyle={styles.input}
            placeHolder="Display Name"
            textStyle={{color: theme.color.gray}}
            placeholderTextColor={theme.color.gray}
          />

          <InputCommon
            value={bio}
            onChangeText={v => setBio(v)}
            inputStyle={styles.input}
            textAlignVertical="top"
            numberOfLines={4}
            multiline={true}
            placeHolder="Bio"
            textStyle={{color: theme.color.gray}}
            placeholderTextColor={theme.color.gray}
          />

          <InputCommon
            value={location}
            onChangeText={v => setLocation(v)}
            inputStyle={styles.input}
            placeHolder="Location"
            textStyle={{color: theme.color.gray}}
            placeholderTextColor={theme.color.gray}
          />

          <InputCommon
            value={url}
            onChangeText={v => setUrl(v)}
            inputStyle={styles.input}
            placeHolder="Website URL"
            textStyle={{color: theme.color.gray}}
            placeholderTextColor={theme.color.gray}
          />
          <LinearGradient
            style={{marginVertical: 20, borderRadius: 7}}
            start={{x: 0, y: 0}}
            end={{x: 1.8, y: 0}}
            colors={['#FC0270', '#6B2063']}>
            <CoustomButton
              // onPress={onlogin}
              title={'Save'}
              fontSize={16}
              lineHeight={22}
              fontWeight={500}
              color={COLORS.white}
              elevation={10}
              height={50}
            />
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}
const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    cameraview: {
      width: 35,
      height: 35,
      backgroundColor: 'white',
      borderRadius: 35 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
      margin: 10,
    },
    Profileveiw: {
      borderRadius: 120,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      paddingHorizontal: 7,
      paddingVertical: 7,
      top: -60,
    },
    input: {
      borderColor: theme.color.borderColor2,
      backgroundColor: theme.color.backgroundColor,
      marginTop: 20,
    },
  });
  return styles;
};
