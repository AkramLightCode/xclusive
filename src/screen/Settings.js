import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import EditProfile from '../Component/EditProfile';
import Account from './Account';
import FansFollowing from './FansFollowing';
import Display from './Display';

export default function Settings() {
  const [active, setActive] = useState(1);
  const onPress = v => {
    setActive(v);
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: COLORS.white, padding: 10}}>
          <Text
            style={{
              fontSize: 22,
              color: COLORS.black,
              fontWeight: '600',
              marginHorizontal: 10,
              fontFamily: FONTS.bold,
              lineHeight: 30,
            }}>
            Setting
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 5,
              marginTop: 10,
            }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => onPress(1)}
                style={{
                  backgroundColor: active == 1 ? COLORS.pink : COLORS.bgColor,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: active == 1 ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress(2)}
                style={{
                  backgroundColor: active == 2 ? COLORS.pink : COLORS.bgColor,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: active == 2 ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  Account
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress(3)}
                style={{
                  backgroundColor: active == 3 ? COLORS.pink : COLORS.bgColor,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: active == 3 ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  Privcy & Safety
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress(4)}
                style={{
                  backgroundColor: active == 4 ? COLORS.pink : COLORS.bgColor,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: active == 4 ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  Fans & Following
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress(5)}
                style={{
                  backgroundColor: active == 5 ? COLORS.pink : COLORS.bgColor,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: active == 5 ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  Notifications
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress(6)}
                style={{
                  backgroundColor: active == 6 ? COLORS.pink : COLORS.bgColor,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: active == 6 ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  Display
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress(7)}
                style={{
                  backgroundColor: active == 7 ? COLORS.pink : COLORS.bgColor,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: active == 7 ? COLORS.white : COLORS.sblack,
                    fontSize: 15,
                  }}>
                  What’s New
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        {active == 1 && <EditProfile />}
        {active == 2 && <Account />}
        {active == 4 && <FansFollowing />}
        {active == 6 && <Display />}

      </ScrollView>
    </View>
  );
}

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
    borderWidth: 5,
    borderColor: '#EC1E79',
    borderRadius: 120,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 7,
    paddingVertical: 7,
    top: -60,
  },
});
