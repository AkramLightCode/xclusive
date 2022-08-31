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
  const [active, setActive] = useState('All', 'Photos', 'Videos', 'Audio');
  const onPress = v => {
    setActive(v);
  };
  const datas = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}];
  return (
    <View style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: COLORS.white, paddingVertical: 15,marginTop:.7}}>
          <Text
            style={{
              fontSize: 22,
              color: COLORS.black,
              fontWeight: '600',
              marginHorizontal: 10,
              fontFamily: FONTS.bold,
              lineHeight: 30,
            }}>
            Bookmarks
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
                    fontWeight: '400',
                    color: active == 'All' ? COLORS.white : COLORS.sblack,
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress('Photos')}
                style={{
                  backgroundColor:
                    active == 'Photos' ? COLORS.pink : COLORS.bgColor,
                  paddingHorizontal: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    color: active == 'Photos' ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  Photos
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress('Videos')}
                style={{
                  backgroundColor:
                    active == 'Videos' ? COLORS.pink : COLORS.bgColor,
                  paddingHorizontal: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: active == 'Videos' ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  Videos
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress('Audio')}
                style={{
                  backgroundColor:
                    active == 'Audio' ? COLORS.pink : COLORS.bgColor,
                  paddingHorizontal: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  marginLeft: 15,
                  marginRight: 15,
                }}>
                <Text
                  style={{
                    color: active == 'Audio' ? COLORS.white : COLORS.sblack,
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.semiBold,
                  }}>
                  {' '}
                  Audio
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress('Other')}
                style={{
                  backgroundColor:
                    active == 'Other' ? COLORS.pink : COLORS.bgColor,
                  paddingHorizontal: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  marginLeft: 15,
                  marginRight: 15,
                }}>
                <Text
                  style={{
                    color: active == 'Other' ? COLORS.white : COLORS.sblack,
                  }}>
                  Other
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        {active == 'All' && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4]}
            renderItem={() => {
              return (
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    marginTop: 15,
                    flexDirection: 'row',
                    padding: 10,
                  }}>
                  <View style={{}}>
                    <Image
                      source={Images.profile}
                      style={{
                        width: 40,
                        height: 40,
                        resizeMode: 'contain',
                        borderRadius: 20,
                      }}
                    />
                  </View>

                  <View style={{marginLeft: 10, flex: 1}}>
                    <View style={{flexDirection: 'row', marginTop: 12}}>
                      <View style={{}}>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: '700',
                            color: COLORS.lightblack,
                            lineHeight: 25,
                            fontFamily: FONTS.Regular,
                          }}>
                          Peter Benedict
                        </Text>
                        <Text
                          style={{
                            fontSize: 13,
                            lineHeight: 20,
                            fontWeight: '400',
                            color: COLORS.baba,
                            fontFamily: FONTS.semiBold,
                          }}>
                          @Xclusive
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                        <Text
                          style={{
                            fontSize: 13,
                            lineHeight: 20,
                            fontWeight: '400',
                            color: COLORS.light,
                            fontFamily: FONTS.semiBold,
                            marginRight: 7,
                          }}>
                          2 days ago
                        </Text>
                        <TouchableOpacity>
                          <Image
                            source={require('../assest/icon/threedots.png')}
                            style={{
                              width: 22,
                              height: 22,
                              resizeMode: 'contain',
                              marginLeft: 3,
                              tintColor: COLORS.csilver,
                              resizeMode: 'contain',
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: COLORS.fontColor,
                          fontWeight: '400',
                          fontSize: 14,
                          fontFamily: FONTS.Regular,
                        }}>
                        It is a long established fact that a reader will be
                        distracted by the readable...
                      </Text>

                      {/* ////////////////////////////// vidio ///////////////////// */}
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                          padding: 5,
                          borderWidth: 0.5,
                          borderRadius: 10,
                          marginTop: 10,
                          borderColor: COLORS.borderColor,
                        }}>
                        <Image
                          source={Images.Mask2}
                          style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 10,
                            resizeMode: 'stretch',
                          }}
                        />
                      </TouchableOpacity>

                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {datas.map(index => {
                          return (
                            <TouchableOpacity
                              key={index}
                              style={{
                                marginRight: 7,
                                padding: 5,
                                borderWidth: 0.5,
                                borderRadius: 10,
                                marginTop: 10,
                                borderColor: COLORS.borderColor,
                              }}>
                              <Image
                                source={Images.Mask}
                                style={{
                                  width: 100,
                                  height: 50,
                                  borderRadius: 10,
                                  resizeMode: 'contain',
                                }}
                              />
                            </TouchableOpacity>
                          );
                        })}
                      </ScrollView>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: 15,
                      }}>
                      <TouchableOpacity>
                        <Image
                          style={{
                            resizeMode: 'contain',
                            width: 20,
                            height: 20,
                            tintColor: COLORS.Tgray,
                          }}
                          source={Images.dislike}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={{marginHorizontal: 30}}>
                        <Image
                          style={{
                            resizeMode: 'contain',
                            width: 20,
                            height: 20,
                            tintColor: COLORS.Tgray,
                          }}
                          source={Images.comments}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          style={{
                            resizeMode: 'contain',
                            width: 20,
                            height: 20,
                            tintColor: COLORS.Tgray,
                          }}
                          source={Images.share}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={{marginLeft: 'auto'}}>
                        <Image
                          style={{
                            resizeMode: 'contain',
                            width: 20,
                            height: 20,
                            tintColor: COLORS.pink,
                          }}
                          source={Images.favorit}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: COLORS.toneblack,
                          fontWeight: '400',
                          fontSize: 14,
                          fontFamily: FONTS.semiBold,
                        }}>
                        13 likes
                      </Text>

                      <Image
                        style={{
                          resizeMode: 'contain',
                          width: 4,
                          height: 4,
                          marginHorizontal: 12,
                        }}
                        source={Images.onedot}
                      />

                      <Text
                        style={{
                          color: COLORS.toneblack,
                          fontWeight: '400',
                          fontSize: 14,
                          fontFamily: FONTS.semiBold,
                        }}>
                        53 comments
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
