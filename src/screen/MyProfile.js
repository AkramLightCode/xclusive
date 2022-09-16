import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import Images from '../assest/Images';
import InputCommon from '../Component/InputCommon';
import Headers from '../comman/Headers';
import {COLORS, FONTS} from '../assest/Themes';
import {useTheme, useThemeAwareObject} from '../theme';

export default function MyProfile({props, navigation}) {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();

  const datas = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}];

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={COLORS.gray} barStyle="light-content" />
      <ScrollView>
        <ImageBackground
          resizeMode="repeat"
          source={Images.profileimg}
          style={{width: '100%', height: 220, backgroundColor: 'pink'}}>
          <Headers
            drawer
            onPress={() =>
              navigation.navigate('MyHomeStackScreens', {
                screen: 'Notifications',
              })
            }
            search
            styleSearch={{tintColor: COLORS.white}}
            bellStayle={{tintColor: COLORS.white}}
          />
        </ImageBackground>
        <View style={styles.FirstView}>
          <View style={styles.mainview}>
            <View style={styles.fiveView}>
              <Text style={styles.FiveText}>05</Text>
              <Text style={styles.FansText}>Fans</Text>
            </View>
            <View style={styles.Profileveiw}>
              <View style={{position: 'absolute', top: -75}}>
                <Image source={Images.profile} style={styles.profileImage} />
              </View>
            </View>
            <View style={styles.TwentyView}>
              <Text style={styles.Text20}>20</Text>
              <Text style={styles.FollowingText}>Following</Text>
            </View>
          </View>
          <Text style={styles.PETERText}>Peter Benedict</Text>
          <Text style={styles.XclusiveFirst}>@Xclusive</Text>
          <View style={styles.PostContainer}>
            <Text style={styles.Post1Text}>1 POST</Text>
          </View>
          <View style={styles.Container2icon}>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconview}>
              <Image
                source={Images.icon2}
                resizeMode="contain"
                style={styles.commonicon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.iconview, {backgroundColor: COLORS.bgColor}]}>
              <Image
                source={Images.icon1}
                resizeMode="contain"
                style={styles.commonicon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.SecondContainer}>
          <InputCommon
            inputStyle={styles.InputContainer}
            placeHolder="Compose new post"
          />
          <View style={styles.dashed}>
            <TouchableOpacity activeOpacity={0.7} style={styles.contect}>
              <Image source={Images.img1} style={styles.Images} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                styles.contect,
                {borderLeftWidth: 2, borderColor: '#767676'},
              ]}>
              <Image source={Images.img2} style={styles.Images} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                styles.contect,
                {borderLeftWidth: 2, borderColor: '#767676'},
              ]}>
              <Image source={Images.img3} style={styles.Images} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={styles.Textview}>
              <Text style={styles.Text}>Live Video</Text>
            </View>
            <View style={styles.Textview}>
              <Text style={styles.Text}>Photo/Video</Text>
            </View>
            <View style={styles.Textview}>
              <Text style={styles.Text}>Feeling/Activity</Text>
            </View>
          </View>
        </View>
        <View style={styles.Third}>
          <View style={styles.ThirdContainer}>
            <TouchableOpacity style={{marginTop: 5}}>
              <Image source={Images.mainimg} style={styles.mainimg} />
            </TouchableOpacity>
            <View style={{marginLeft: 10, flex: 1}}>
              <View style={{flexDirection: 'row', marginTop: 12}}>
                <View style={{}}>
                  <Text style={styles.peterText}>Peter Benedict</Text>
                  <Text style={styles.xclusive}>@Xclusive</Text>
                </View>
                <View style={styles.DayContainer}>
                  <Text style={styles.DayText}>2 days ago</Text>
                  <TouchableOpacity>
                    <Image
                      source={require('../assest/icon/threedots.png')}
                      style={styles.threedots}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text numberOfLines={2} style={styles.details}>
                  It is a long established fact that a reader will be distracted
                  by the readable...
                </Text>
                {/* ////////////////////////////// vidio ///////////////////// */}
                <TouchableOpacity activeOpacity={0.5} style={styles.border}>
                  <Image source={Images.mainboyimg} style={styles.mainboyimg} />
                </TouchableOpacity>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {datas.map(index => {
                    return (
                      <TouchableOpacity
                        style={[styles.border, {marginRight: 7}]}>
                        <Image source={Images.boyimg2} style={styles.boyimg2} />
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
              <View style={styles.BottomContainer}>
                <TouchableOpacity>
                  <Image style={styles.bottamIcom} source={Images.dislike} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal: 40}}>
                  <Image style={styles.bottamIcom} source={Images.comments} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.bottamIcom} source={Images.share} />
                </TouchableOpacity>
              </View>
              <View style={styles.BottomView}>
                <Text style={styles.LikesText}>13 Likes</Text>
                <Image style={styles.onedot} source={Images.onedot} />
                <Text style={styles.CommentsText}>53 Comments</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: theme.color.bgColor,
    },
    FirstView: {
      backgroundColor: theme.color.backgroundColor,
      paddingVertical: 20,
    },
    mainview: {
      width: '100%',
      flexDirection: 'row',
    },
    fiveView: {
      alignItems: 'center',
      flex: 3,
    },
    FiveText: {
      fontSize: 16,
      lineHeight: 18,
      color: theme.color.toneblack2,
      fontFamily: FONTS.semiBold,
    },
    FansText: {
      fontSize: 14,
      lineHeight: 18,
      color: theme.color.gray1,
      fontFamily: FONTS.Regular,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      resizeMode: 'contain',
      borderWidth: 5,
      borderColor: COLORS.pink,
    },
    TwentyView: {
      flex: 3,
      alignItems: 'center',
    },
    Text20: {
      fontSize: 16,
      lineHeight: 18,
      color: theme.color.toneblack2,
      fontFamily: FONTS.semiBold,
    },
    FollowingText: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: '400',
      color: theme.color.gray1,
      fontFamily: FONTS.Regular,
    },
    PETERText: {
      marginTop: 10,
      fontSize: 18,
      lineHeight: 25,
      color: theme.color.darkblack,
      textAlign: 'center',
      fontFamily: FONTS.semiBold,
    },
    XclusiveFirst: {
      textAlign: 'center',
      fontSize: 13,
      lineHeight: 20,
      color: theme.color.lightgray,
      fontFamily: FONTS.Regular,
    },
    PostContainer: {
      alignSelf: 'center',
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: COLORS.bgColor,
      marginTop: 10,
      borderRadius: 3,
    },
    Post1Text: {
      fontSize: 12,
      lineHeight: 18,
      color: theme.color.pink,
      fontFamily: FONTS.Regular,
    },

    Profileveiw: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Container2icon: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 20,
    },
    iconview: {
      backgroundColor: '#EC1E79',
      borderRadius: 60 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      padding: 10,
    },
    commonicon: {
      width: 18,
      height: 18,
    },

    contect: {
      width: '33%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    SecondContainer: {
      backgroundColor: theme.color.backgroundColor,
      marginTop: 20,
      padding: 20,
    },
    InputContainer: {
      borderRadius: 50,
      marginBottom: 20,
      borderColor: COLORS.black,
    },
    dashed: {
      flexDirection: 'row',
      paddingTop: 20,
      borderTopWidth: 1,
      borderStyle: 'dashed',
    },

    Images: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
    Textview: {
      width: '33%',
    },
    Text: {
      fontSize: 13,
      lineHeight: 16,
      color: theme.color.Tundora,
      textAlign: 'center',
      fontFamily: FONTS.medium,
    },
    boyimg: {
      width: '100%',
      height: 80,
      borderRadius: 7,
      resizeMode: 'cover',
    },
    Third: {
      backgroundColor: 'white',
      marginTop: 20,
      marginBottom: 20,
    },

    ThirdContainer: {
      backgroundColor: theme.color.backgroundColor,
      flexDirection: 'row',
      padding: 10,
    },
    mainimg: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
      borderRadius: 20,
    },
    peterText: {
      fontSize: 18,
      color: theme.color.lightblack,
      lineHeight: 25,
      fontFamily: FONTS.semiBold,
    },
    xclusive: {
      fontSize: 13,
      lineHeight: 20,
      color: theme.color.baba,
      fontFamily: FONTS.Regular,
    },
    DayContainer: {
      flexDirection: 'row',
      marginLeft: 'auto',
    },
    DayText: {
      fontSize: 13,
      lineHeight: 20,
      color: theme.color.light,
      fontFamily: FONTS.Regular,
      marginRight: 7,
    },
    threedots: {
      width: 22,
      height: 22,
      resizeMode: 'contain',
      marginLeft: 3,
      tintColor: theme.color.csilver,
    },
    details: {
      flex: 1,
      color: theme.color.fontColor,
      fontSize: 14,
      fontFamily: FONTS.Regular,
      textTransform: 'capitalize',
    },
    mainboyimg: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
    boyimg2: {
      width: 100,
      height: 50,
      borderRadius: 10,
      resizeMode: 'stretch',
      marginHorizontal: 5,
    },

    BottomContainer: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 15,
    },

    bottamIcom: {
      resizeMode: 'contain',
      width: 20,
      height: 20,
      tintColor: theme.color.Tgray,
    },
    BottomView: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 15,
      alignItems: 'center',
    },
    LikesText: {
      color: theme.color.toneblack,
      fontSize: 14,
      fontFamily: FONTS.medium,
      textTransform: 'capitalize',
    },
    onedot: {
      resizeMode: 'contain',
      width: 4,
      height: 4,
      tintColor: theme.color.appsilver,
      marginHorizontal: 15,
    },
    CommentsText: {
      color: theme.color.toneblack,
      fontSize: 14,
      fontFamily: FONTS.Regular,
      textTransform: 'capitalize',
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
