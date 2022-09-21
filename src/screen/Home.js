import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  ImageBackground,
  RefreshControl,
  Pressable,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import Images from '../assest/Images';
import {useTheme, useThemeAwareObject} from '../theme';
import API from '../services/API';
import {ADD_BOOKMARK, ALL_FREE_POSTS} from '../services/ApiEndpoints';
import LoaderIndicator from '../comman/LoaderIndicator';
import Video from 'react-native-video';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
export default function Home({route}) {
  const [refreshing, setRefreshing] = useState(false);
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();
  const [like, setLike] = useState(false);
  const [activeButton, setActiveButton] = useState('All Members');
  const [ListData, setListData] = useState([]);
  const [loding, setLoding] = useState(false);
  const [listVideo, setListVideo] = useState();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    API.get(ALL_FREE_POSTS).then(res => {
      setListData(res.data);
    });
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    setLoding(true);
    API.get(ALL_FREE_POSTS)
      .then(res => {
        setListData(res.data);
        // console.log('>>>>>>>>>>>>>>>>', res.data);
        setLoding(false);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  // const AddToFavorit = index => {
  //   API.post(ADD_BOOKMARK, {post_id:21}).then(res => {
  //     console.log('======post_id=======',res);
  //   });
  // };

  const onChangButton = item => {
    setActiveButton(item);
  };

  const buttonData = [
    {buttonHeading: 'All Members'},
    {buttonHeading: 'Following'},
    {buttonHeading: 'Close Friends'},
  ];

  const datas = [{key: '1',vidioImage:Images.Mask}, {key: '2',vidioImage:Images.Mask2}, {key: '3',vidioImage:Images.Mask4}, {key: '4',vidioImage:Images.Mask3}];

  const ButtonItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onChangButton(item.buttonHeading)}
        style={[
          styles.button,
          {
            backgroundColor:
              item.buttonHeading == activeButton ? COLORS.pink : COLORS.bgColor,
          },
        ]}>
        <Text
          style={[
            styles.buttonText,
            {
              color:
                item.buttonHeading == activeButton
                  ? COLORS.white
                  : COLORS.sblack,
            },
          ]}>
          {item.buttonHeading}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderItem = ({index, item}) => {
    // console.warn('index', index,'ig',item.id);
    // console.warn('item', ;
    return (
      <View>
        <View style={styles.listContainor}>
          <TouchableOpacity style={{marginTop: 5}}>
            <Image source={Images.profile} style={styles.userProfile} />
          </TouchableOpacity>
          <View style={{marginLeft: 10, flex: 1}}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{}}>
                <Text style={styles.userName}>Peter Benedict</Text>
                <Text style={styles.XclusiveText}>@Xclusive</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                <Text style={styles.XclusiveText}>2 days ago</Text>
                <TouchableOpacity>
                  <Image
                    source={require('../assest/icon/threedots.png')}
                    style={styles.dotIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                color: theme.color.fontColor,
                fontSize: 14,
                textTransform: 'capitalize',
                fontFamily: FONTS.Regular,
              }}>
              It is a long established fact that a reader will be distracted by
              the readable...
            </Text>
            <View>
              {/* ////////////////////////////// vidio ///////////////////// */}

              <View style={[styles.border, {width: '100%', height: 200}]}>
                {/* <Image source={Images.Mask} resizeMode="contain"  style={styles.vidio} /> */}
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
                  {listVideo != index && (
                    <Pressable
                      onPress={() => setListVideo(index)}
                      style={styles.playButton}>
                      <Image
                        resizeMode="contain"
                        source={require('../assest/icon/play.png')}
                        style={{height: 10, width: 10}}
                      />
                    </Pressable>
                  )}
                </Pressable>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {datas.map((ele,index) => {
                  return (
                    <TouchableOpacity style={[styles.border, {marginRight: 7}]}>
                      <Image source={ele.vidioImage} style={styles.mapItem} />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
            <View style={styles.iconContainor}>
              <TouchableOpacity onPress={() => setLike(like => !like)}>
                <Image
                  style={styles.icon}
                  source={like == true ? Images.like : Images.dislike}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 40}}>
                <Image style={styles.icon} source={Images.comments} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.icon} source={Images.share} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginLeft: 'auto', marginRight: 5}}
                // onPress={AddToFavorit()}
              >
                <Image style={styles.favorit} source={Images.favorit} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Text style={[styles.detail, {color: theme.color.toneblack}]}>
                20 likes
              </Text>

              <Image style={styles.singalDot} source={Images.onedot} />

              <Text style={[styles.detail, {color: theme.color.toneblack}]}>
                53 comments
              </Text>
            </View>
          </View>
        </View>

        {/* ????????????????????????????????????????????????????????????????????????*/}
        {index === 1 && (
          <View
            style={{
              paddingVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text style={styles.userName}>Suggestion</Text>
              <TouchableOpacity>
                <Text style={[styles.detail, {color: theme.color.pink}]}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={[1, 2, 3]}
              renderItem={() => {
                return (
                  <ImageBackground
                    resizeMode="stretch"
                    source={Images.chatgirlimg}
                    style={styles.bgImg}>
                    <TouchableOpacity style={{marginLeft: 'auto', margin: 10}}>
                      <Image
                        source={Images.dot}
                        style={{
                          height: 10,
                          width: 30,
                          tintColor: theme.color.black,
                        }}
                      />
                    </TouchableOpacity>
                    <View style={styles.elivetionView}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          source={Images.Mask3}
                          style={styles.cardUserImg}
                        />
                        <View style={{marginLeft: 5}}>
                          <Text style={styles.userCard}>Gail Forcewind</Text>
                          <Text style={styles.cardXclusive}>@Xclusive</Text>
                        </View>
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity style={styles.cardButton}>
                          <Text style={styles.cardButtonText}>Free</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ImageBackground>
                );
              }}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.seperator} />
      <View style={styles.buttonContainor}>
        <FlatList
          data={buttonData}
          renderItem={ButtonItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.seperator} />
      <View style={styles.filterView}>
        <TouchableOpacity>
          <Image style={styles.filterIcon} source={Images.gallery} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.filterIcon} source={Images.Vector} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.filterIcon} source={Images.edit} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.filterIcon} source={Images.Menu} />
        </TouchableOpacity>
      </View>
      <View style={styles.seperator} />
      {activeButton == 'All Members' && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ListData}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
      <LoaderIndicator loading={loding} />
    </View>
  );
}

const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: theme.color.bgColor},
    listContainor: {
      backgroundColor: theme.color.backgroundColor,
      marginTop: 15,
      flexDirection: 'row',
      padding: 10,
    },
    userProfile: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
      borderRadius: 20,
    },
    userName: {
      fontSize: 18,
      color: theme.color.lightblack,
      lineHeight: 25,
      fontFamily: FONTS.semiBold,
    },
    XclusiveText: {
      fontSize: 13,
      lineHeight: 20,
      color: theme.color.baba,
      fontFamily: FONTS.Regular,
    },
    dotIcon: {
      width: 22,
      height: 22,
      resizeMode: 'contain',
      marginLeft: 5,
      tintColor: theme.color.csilver,
    },
    detail: {
      color: theme.color.fontColor,
      fontSize: 14,
      fontFamily: FONTS.Regular,
      textTransform: 'capitalize',
    },
    vidio: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    mapItem: {
      width: 100,
      height: 50,
      borderRadius: 10,
      resizeMode: 'contain',
    },
    iconContainor: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 15,
    },
    icon: {
      resizeMode: 'contain',
      width: 20,
      height: 20,
      tintColor: theme.color.light,
    },
    favorit: {
      resizeMode: 'contain',
      width: 20,
      height: 20,
      tintColor: theme.color.pink,
    },

    singalDot: {
      resizeMode: 'contain',
      width: 4,
      height: 4,
      marginHorizontal: 15,
      tintColor: theme.color.appsilver,
    },
    buttonContainor: {
      paddingVertical: 10,
      backgroundColor: theme.color.white,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginLeft: 10,
    },
    buttonText: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: FONTS.Regular,
    },
    filterView: {
      flexDirection: 'row',
      paddingBottom: 10,
      justifyContent: 'space-around',
      backgroundColor: theme.color.backgroundColor,
      marginTop: 1,
      paddingVertical: 10,
    },
    filterIcon: {
      resizeMode: 'contain',
      width: 20,
      height: 20,
      tintColor: theme.color.PlatinumGray,
    },
    bgImg: {
      height: 210,
      width: 175,
      marginTop: 15,
      borderRadius: 10,
      overflow: 'hidden',
      marginLeft: 10,
    },
    elivetionView: {
      padding: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    userCard: {
      fontSize: 14,
      color: COLORS.white,
      fontFamily: FONTS.semiBold,
    },
    cardXclusive: {
      fontSize: 12,
      color: COLORS.white,
      fontFamily: FONTS.light,
    },
    cardButton: {
      backgroundColor: theme.color.backgroundColor,
      paddingVertical: 4,
      paddingHorizontal: 15,
      marginTop: 5,
      borderRadius: 5,
    },
    cardButtonText: {
      color: theme.color.black,
      fontSize: 12,
      fontFamily: FONTS.light,
    },
    cardUserImg: {
      height: 40,
      width: 40,
      borderRadius: 50,
      resizeMode: 'cover',
      borderWidth: 2,
      borderColor: COLORS.white,
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
