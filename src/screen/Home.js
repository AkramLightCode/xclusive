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
import React, {useState} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import Images from '../assest/Images';

export default function Home() {
  const [active, setActive] = useState(1);
  const onPress = v => {
    setActive(v);
  };

  const [like, setLike] = useState(false);

  const datas = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}];
  const ListData = [1, 2, 3];
  const renderItem = ({index, item}) => {
    return (
      <View>
        <View style={styles.listContainor}>
          <TouchableOpacity style={{}}>
            <Image source={Images.profile} style={styles.userProfile} />
          </TouchableOpacity>
          <View style={{marginLeft: 10, flex: 1}}>
            <View style={{flexDirection: 'row', marginTop: 12}}>
              <View style={{}}>
                <Text style={styles.userName}>Peter Benedict</Text>
                <Text style={styles.XclusiveText}>@Xclusive</Text>
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
                    style={styles.dotIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                color: COLORS.fontColor,
                fontWeight: '400',
                fontSize: 14,
                fontFamily: FONTS.Regular,
              }}>
              It is a long established fact that a reader will be distracted by
              the readable...
            </Text>
            <View>
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
                <Image source={Images.Mask} style={styles.vidio} />
              </TouchableOpacity>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {datas.map(index => {
                  return (
                    <TouchableOpacity
                      style={{
                        marginRight: 7,
                        padding: 5,
                        borderWidth: 0.5,
                        borderRadius: 10,
                        marginTop: 10,
                        borderColor: COLORS.borderColor,
                      }}>
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
              <TouchableOpacity style={{marginHorizontal: 30}}>
                <Image style={styles.icon} source={Images.comments} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.icon} source={Images.share} />
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 'auto'}}>
                <Image style={styles.favorit} source={Images.favorit} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center',marginTop:5}}>
              <Text style={[styles.detail, {color: COLORS.toneblack}]}>
                13 likes
              </Text>

              <Image style={styles.singalDot} source={Images.onedot} />

              <Text style={[styles.detail, {color: COLORS.toneblack}]}>
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
                <Text style={[styles.detail, {color: COLORS.pink}]}>
                  See all
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
                        style={{height: 10, width: 30, tintColor: COLORS.black}}
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
    <View style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={styles.buttonContainor}> */}
        <ScrollView horizontal style={styles.buttonContainor}>
          <TouchableOpacity
            onPress={() => onPress(1)}
            style={[
              styles.button,
              {backgroundColor: active == 1 ? COLORS.pink : COLORS.bgColor},
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
              {backgroundColor: active == 3 ? COLORS.pink : COLORS.bgColor},
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
        {/* </View> */}
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
        {active == 1 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={ListData}
            renderItem={renderItem}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainor: {
    backgroundColor: COLORS.white,
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
    fontWeight: '700',
    color: COLORS.lightblack,
    lineHeight: 25,
    fontFamily: FONTS.medium,
  },
  XclusiveText: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
    color: COLORS.baba,
    fontFamily: FONTS.semiBold,
  },
  DayText: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
    color: COLORS.light,
    fontFamily: FONTS.light,
  },
  dotIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginLeft: 3,
    tintColor: COLORS.csilver,
    resizeMode: 'contain',
  },
  detail: {
    color: COLORS.fontColor,
    fontWeight: '400',
    fontSize: 14,
    fontFamily: FONTS.Regular,
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
    tintColor: COLORS.Tgray,
  },
  favorit: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    tintColor: COLORS.pink,
  },

  singalDot: {
    resizeMode: 'contain',
    width: 4,
    height: 4,
    marginHorizontal: 15,
  },
  buttonContainor: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    marginTop: 1,
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
  },
  buttonText: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    fontFamily: FONTS.semiBold,
  },
  filterView: {
    flexDirection: 'row',
    paddingBottom: 10,
    justifyContent: 'space-around',
    backgroundColor: COLORS.white,
    marginTop: 1,
    paddingVertical: 10,
  },
  filterIcon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
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
    backgroundColor: COLORS.white,
    paddingVertical: 4,
    paddingHorizontal: 15,
    marginTop: 5,
    borderRadius: 5,
  },
  cardButtonText: {
    color: COLORS.black,
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
});
