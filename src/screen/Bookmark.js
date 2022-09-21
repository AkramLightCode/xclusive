import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import Images from '../assest/Images';
import {useTheme, useThemeAwareObject} from '../theme';
import API from '../services/API';
import {BOOKMARK_LIST} from '../services/ApiEndpoints';
import LoaderIndicator from '../comman/LoaderIndicator';
import Video from 'react-native-video';

export default function Notifications() {
  const [listVideo, setListVideo] = useState();
  const [loding, setLoding] = useState(false);
  const [activeButton, setActiveButton] = useState('All');
  const [ListData, setListData] = useState([1, 2, 3]);

  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();

  useEffect(() => {
    setLoding(true);
    API.get(BOOKMARK_LIST)
      .then(res => {
        setListData(res.data);
        // console.log('>>>>>>>>>>>>>>>>', res.data);
        setLoding(false);
      })
      .catch(e => {
        setLoding(false);
        console.log(e);
      });
  }, []);

  const onChangButton = item => {
    setActiveButton(item);
  };

  const buttonData = [
    {title: 'All'},
    {title: 'Photos'},
    {title: 'Videos'},
    {title: 'Audio'},
  ];
  const buttonItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onChangButton(item.title)}
        style={{
          backgroundColor:
            item.title == activeButton ? COLORS.pink : COLORS.bgColor,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 30,
          marginLeft: 15,
        }}>
        <Text
          style={{
            color: item.title == activeButton ? COLORS.white : COLORS.sblack,
            fontSize: 15,
            lineHeight: 20,
            fontFamily: FONTS.Regular,
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const datas = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}];
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.FlatListContainer}>
        <View style={{marginTop: 5}}>
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
                  color: theme.color.lightblack,
                  lineHeight: 25,
                  fontFamily: FONTS.semiBold,
                }}>
                Peter Benedict
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 20,
                  color: theme.color.baba,
                  fontFamily: FONTS.Regular,
                }}>
                @Xclusive
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 20,
                  color: theme.color.light,
                  fontFamily: FONTS.Regular,
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
                    tintColor: theme.color.csilver,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: theme.color.Tgray,
                fontWeight: '400',
                fontSize: 14,
                fontFamily: FONTS.Regular,
              }}>
              It is a long established fact that a reader will be distracted by
              the readable...
            </Text>

            {/* ////////////////////////////// vidio ///////////////////// */}
            <View style={[styles.border, {width: '100%', height: 200}]}>
              {/* <Image source={Images.Mask2} resizeMode='contain' style={styles.vidio} /> */}
              <Pressable onPress={() => setListVideo('')}>
                <Video
                  resizeMode="cover"
                  paused={listVideo == index ? false : true}
                  source={require('../assest/icon/video.mp4')}
                  style={styles.vidio}
                  repeat={false}
                  value={10}
                  poster="https://img.freepik.com/free-photo/high-fashion-look-glamor-sexy-sunbathed-model-girl-white-lingerie-bikini-colorful-sunhat-blue-beach-ocean-water_158538-2743.jpg?w=2000"
                  posterResizeMode="cover"
                />
              </Pressable>
              {listVideo != index && (
                <TouchableOpacity
                  onPress={() => setListVideo(index)}
                  style={styles.playButton}>
                  <Image
                    resizeMode="contain"
                    source={require('../assest/icon/play.png')}
                    style={{height: 10, width: 10}}
                  />
                </TouchableOpacity>
              )}
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {datas.map(index => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[styles.border, {marginRight: 7}]}>
                    <Image source={Images.Mask} style={styles.mapItem} />
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
                  tintColor: theme.color.Tgray,
                }}
                source={Images.dislike}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: 40}}>
              <Image
                style={{
                  resizeMode: 'contain',
                  width: 20,
                  height: 20,
                  tintColor: theme.color.Tgray,
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
                  tintColor: theme.color.Tgray,
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
                  tintColor: theme.color.pink,
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
                color: theme.color.toneblack,
                fontSize: 14,
                fontFamily: FONTS.Regular,
              }}>
              13 Likes
            </Text>

            <Image
              style={{
                resizeMode: 'contain',
                width: 4,
                height: 4,
                marginHorizontal: 12,
                tintColor: theme.color.appsilver,
              }}
              source={Images.onedot}
            />

            <Text
              style={{
                color: theme.color.toneblack,
                fontSize: 14,
                fontFamily: FONTS.Regular,
              }}>
              53 Comments
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.color.bgColor}}>
      <View style={styles.seperator} />
      <View style={styles.MainView}>
        <Text
          style={{
            fontSize: 22,
            color: theme.color.black,
            marginHorizontal: 10,
            fontFamily: FONTS.semiBold,
            lineHeight: 30,
          }}>
          Bookmarks
        </Text>
        <FlatList
          data={buttonData}
          renderItem={buttonItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {activeButton == 'All' && (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={ListData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
      <LoaderIndicator loading={loding} />
    </View>
  );
}
const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    MainView: {
      backgroundColor: theme.color.backgroundColor,
      paddingVertical: 15,
    },
    AllMainView: {
      backgroundColor: theme.color.backgroundColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    FlatListContainer: {
      backgroundColor: theme.color.backgroundColor,
      marginTop: 15,
      flexDirection: 'row',
      padding: 10,
    },
    seperator: {
      backgroundColor: theme.color.gray,
      height: 0.3,
    },
    border: {
      padding: 5,
      borderWidth: 0.5,
      borderRadius: 10,
      marginTop: 10,
      borderColor: theme.color.borderColor,
    },
    mapItem: {
      width: 100,
      height: 50,
      borderRadius: 10,
      resizeMode: 'contain',
    },
    vidio: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    playButton: {
      alignSelf: 'center',
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 50,
      position: 'absolute',
      alignContent: 'center',
      top: 101,
    },
  });
  return styles;
};
