import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../assest/Images';
import CoustomButton from '../Component/CoustomButton';
import {TextInput} from 'react-native-gesture-handler';
import Headers from '../comman/Headers';
import {COLORS, FONTS} from '../assest/Themes';
import {useTheme, useThemeAwareObject} from '../theme';

export default function Chat({}) {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();
  return (
    <View style={styles.mainview}>
      <View style={{backgroundColor: theme.color.backgroundColor}}>
        <Headers
          search
          // mainStyles={{backgroundColor: theme.color.backgroundColor}}
          styleSearch={{tintColor: theme.color.black}}
          bellStayle={{tintColor: theme.color.black}}
        />
        <Text
          style={{
            fontSize: 22,
            color: theme.color.black,
            marginHorizontal: 10,
            fontFamily: FONTS.semiBold,
            lineHeight: 30,
            marginVertical: 7,
          }}>
          Chat
        </Text>
      </View>
      <ScrollView>
        <View style={{flex: 1, paddingVertical: 20}}>
          <View style={{alignItems: 'center', borderRadius: 10}}>
            <Text style={styles.date}>22 mar</Text>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              marginVertical: 20,
              backgroundColor: '#fff',
              padding: 5,
              borderRadius: 50,
            }}>
            <Image
              source={Images.chatgirlimg}
              style={{
                width: 80,
                height: 80,
                resizeMode: 'contain',
                borderRadius: 80 / 2,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              color: theme.color.lightblack,
              lineHeight: 25,
              fontFamily: FONTS.semiBold,
              textAlign: 'center',
            }}>
            Peter Be nedict
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '400',
              textAlign: 'center',
              color: theme.color.bm,
              lineHeight: 18,
              fontFamily: FONTS.Regular,
            }}>
            Last Seen 25min Ago
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: theme.color.backgroundColor,
            padding: 15,
          }}>
          <ImageBackground
            source={Images.chatgirlimg}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              justifyContent: 'center',
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <View
              opacity={0.8}
              style={{
                backgroundColor: '#fffffeee',
                flex: 1,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  borderRadius: 50,
                  backgroundColor: theme.color.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  padding: 10,
                }}>
                <Image
                  source={Images.lock}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    tintColor: theme.color.gray,
                  }}
                />
              </View>
              <View style={{marginTop: 20}}>
                <CoustomButton
                  onPress={() => {}}
                  title={'Unlock for $5'}
                  fontSize={16}
                  color={COLORS.white}
                  backgroundColor={COLORS.pink}
                  MargH={70}
                  Redius={7}
                  height={40}
                />
              </View>
            </View>
          </ImageBackground>
          <Text
            style={{
              color: theme.color.light,
              fontWeight: '400',
              marginTop: 10,
              fontSize: 14,
              lineHeight: 20,
              fontFamily: FONTS.Regular,
            }}>
            4.30am $5 Not Paid Yet
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: theme.color.backgroundColor,
          alignItems: 'center',
          padding: 15,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: theme.color.pink,
            padding: 10,
            borderRadius: 50,
          }}>
          <Image
            resizeMode="contain"
            source={require('../assest/icon/puls.png')}
            style={{width: 15, height: 15}}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            borderWidth: 0.5,
            borderRadius: 50,
            borderColor: COLORS.appgray,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Type a message....."
            placeholderTextColor={theme.color.black}
            style={{
              marginHorizontal: 5,
              flex: 1,
              color: theme.color.black,
              fontSize: 14,
              fontFamily: FONTS.Regular,
            }}
          />
          <TouchableOpacity>
            <Image
              source={require('../assest/icon/Button.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    mainview: {
      flex: 1,
      backgroundColor: theme.color.bgColor,
    },
    date: {
      backgroundColor: COLORS.white,
      paddingHorizontal: 10,
      paddingVertical: 5,
      color: COLORS.pink,
      fontSize: 14,
      lineHeight: 18,
      fontFamily: FONTS.Regular,
    },
  });
  return styles;
};
