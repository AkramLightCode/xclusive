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

export default function Chat({}) {
  return (
    <View style={styles.mainview}>
      <View style={{backgroundColor: COLORS.white}}>
        <Headers search />
        <Text
          style={{
            fontSize: 22,
            color: COLORS.black,
            fontWeight: '600',
            marginHorizontal: 10,
            fontFamily: FONTS.bold,
            lineHeight: 30,
            marginVertical: 5,
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
              fontWeight: '600',
              color: COLORS.lightblack,
              lineHeight: 25,
              fontFamily: FONTS.bold,
              textAlign: 'center',
            }}>
            Peter Be nedict
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '400',
              textAlign: 'center',
              color: COLORS.bm,
              lineHeight: 18,
              fontFamily: FONTS.semiBold,
            }}>
            Last Seen 25min Ago
          </Text>
        </View>

        <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
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
                  borderRadius: 40 / 2,
                  backgroundColor: COLORS.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  padding: 10,
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.lock}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
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
                  elevation={10}
                />
              </View>
            </View>
          </ImageBackground>
          <Text
            style={{
              color: COLORS.darkgray,
              fontWeight: '400',
              marginTop: 10,
              fontSize: 14,
              lineHeight: 20,
              fontFamily:FONTS.semiBold
            }}>
            4.30am $5 Not Paid Yet
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor:COLORS.white,
          alignItems: 'center',
          padding: 15,
        }}>
        <TouchableOpacity style={{}}>
          <Image source={Images.Plus} style={{width: 40, height: 40}} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            borderWidth: 0.5,
            borderRadius: 50,
            borderColor:COLORS.appgray,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Type a message....."
            placeholderTextColor={COLORS.silver}
            style={{marginHorizontal: 5, flex: 1}}
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

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
  },
  date: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: COLORS.pink,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FONTS.semiBold,
  },
});
