import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import Images from '../assest/Images';
import {useTheme, useThemeAwareObject} from '../theme';
import API from '../services/API';
import {ALL_FREE_POSTS} from '../services/ApiEndpoints';
import LoaderIndicator from '../comman/LoaderIndicator';


export default function Home({route}) {
 

  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();
  const [active, setActive] = useState(1);
  const onPress = v => {
    setActive(v);
  };

  const [like, setLike] = useState(false);
  const [ListData, setListData] = useState([]);

  const [loding, setLoding] = useState(false);

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

  const datas = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}];

  const renderItem = ({index, item}) => {
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
              <TouchableOpacity activeOpacity={0.5} style={styles.border}>
                <Image source={Images.Mask} style={styles.vidio} />
              </TouchableOpacity>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {datas.map(index => {
                  return (
                    <TouchableOpacity style={[styles.border, {marginRight: 7}]}>
                      <Image source={Images.Mask} style={styles.mapItem} />
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
              <TouchableOpacity style={{marginLeft: 'auto', marginRight: 5}}>
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

        {/* /////////////////////////////////////////////////////???????//////////////?? */}
        {/* ????????????????????????????????????????????????????????????????????????/// /*/}

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
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.seperator} />
      <View style={styles.buttonContainor}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => onPress(1)}
            style={[
              styles.button,
              {
                backgroundColor: active == 1 ? COLORS.pink : COLORS.bgColor,
              },
            ]}>
            <Text
              style={[
                styles.buttonText,
                {color: active == 1 ? COLORS.white : COLORS.sblack},
              ]}>
              All Members
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPress(2)}
            style={[
              styles.button,
              {backgroundColor: active == 2 ? COLORS.pink : COLORS.bgColor},
            ]}>
            <Text
              style={[
                styles.buttonText,
                {color: active == 2 ? COLORS.white : COLORS.sblack},
              ]}>
              Following
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPress(3)}
            style={[
              styles.button,
              {
                backgroundColor: active == 3 ? COLORS.pink : COLORS.bgColor,
                marginRight: 10,
              },
            ]}>
            <Text
              style={[
                styles.buttonText,
                {color: active == 3 ? COLORS.white : COLORS.sblack},
              ]}>
              Close Friends
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* </View> */}
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
      {active == 1 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ListData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          
        />
      )}
      {/* </ScrollView> */}
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
    // DayText: {
    //   fontSize: 13,
    //   lineHeight: 20,
    //   color: COLORS.light,
    //   fontFamily: FONTS.light,
    // },
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
      height: 200,
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
  });
  return styles;
};
