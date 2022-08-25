import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import Images from '../assest/Images';

export default function Notifications() {
  const [active, setActive] = useState(
    'All',
    'Interactions',
    'Liked',
    'Subscribed',
  );

  const onPress = v => {
    setActive(v);
  };
  const ListData = ({item}) => {
    return (
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          backgroundColor: COLORS.white,
          marginTop: 10,
          flex: 1,
        }}>
        <Image
          style={{
            height: 50,
            width: 50,
            resizeMode: 'contain',
            borderRadius: 50,
          }}
          source={Images.profile}
        />
        <View style={{flex: 1, justifyContent: 'center', marginLeft: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: COLORS.lightblack,
                lineHeight: 25,
                fontFamily: FONTS.medium,
              }}>
              Peter Benedict
            </Text>
            <Text
              style={{
                fontSize: 13,
                lineHeight: 20,
                fontWeight: '400',
                color: COLORS.light,
                fontFamily: FONTS.semiBold,
              }}>
              2 days ago
            </Text>
          </View>
          <Text
            style={{
              fontSize: 13,
              lineHeight: 20,
              fontWeight: '400',
              color: COLORS.lightgray,
              fontFamily: FONTS.semiBold,
            }}>
            @Xclusive
          </Text>
          <Text
            style={{
              flexDirection: 'row',
              marginTop: 5,
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                lineHeight: 20,
                color: COLORS.gray,
                fontFamily: FONTS.medium,
              }}>
              Lorem ipsum
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 20,
                fontFamily: FONTS.Regular,
              }}>
              {} dolor amet, adipiscing elit. Cras cursus...
            </Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: COLORS.white, paddingVertical: 15}}>
          <Text
            style={{
              fontSize: 22,
              color: COLORS.black,
              fontWeight: '600',
              marginHorizontal: 10,
              fontFamily: FONTS.bold,
              lineHeight: 30,
            }}>
            Notifications
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                backgroundColor: COLORS.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <TouchableOpacity
                onPress={() => onPress('All')}
                style={{
                  backgroundColor:
                    active == 'All' ? COLORS.pink : COLORS.bgColor,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 30,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: active == 'All' ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress('Interactions')}
                style={{
                  backgroundColor:
                    active == 'Interactions' ? COLORS.pink : COLORS.bgColor,
                  paddingHorizontal: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color:
                      active == 'Interactions' ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  Interactions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress('Liked')}
                style={{
                  backgroundColor:
                    active == 'Liked' ? COLORS.pink : COLORS.bgColor,
                  paddingHorizontal: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: active == 'Liked' ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  Liked
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress('Subscribed')}
                style={{
                  backgroundColor:
                    active == 'Subscribed' ? COLORS.pink : COLORS.bgColor,
                  paddingHorizontal: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  marginLeft: 15,
                  marginRight: 15,
                }}>
                <Text
                  style={{
                    color:
                      active == 'Subscribed' ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  Subscribed
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        {active == 'All' && (
          <FlatList
            style={{paddingBottom: 20}}
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={ListData}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
