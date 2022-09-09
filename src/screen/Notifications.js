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
import {useTheme, useThemeAwareObject} from '../theme';

export default function Notifications() {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();
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
      <View style={styles.FlatListContainer}>
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
                color: theme.color.light,
                fontFamily: FONTS.Regular,
              }}>
              2 days ago
            </Text>
          </View>
          <Text
            style={{
              fontSize: 13,
              lineHeight: 20,
              color: theme.color.lightgray,
              fontFamily: FONTS.Regular,
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
                lineHeight: 20,
                color: theme.color.gray,
                fontFamily: FONTS.medium,
              }}>
              Lorem ipsum
            </Text>
            <Text
              style={{
                color: theme.color.gray,
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
    <View style={styles.Container}>
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
          Notifications
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.AllMainView}>
            <TouchableOpacity
              onPress={() => onPress('All')}
              style={{
                backgroundColor: active == 'All' ? COLORS.pink : COLORS.bgColor,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 30,
                marginLeft: 15,
              }}>
              <Text
                style={{
                  color: active == 'All' ? COLORS.white : COLORS.sblack,
                  fontSize: 15,
                  lineHeight: 20,
                  fontFamily: FONTS.Regular,
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
                  fontSize: 15,
                  lineHeight: 20,
                  fontFamily: FONTS.Regular,
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
                  fontSize: 15,
                  lineHeight: 20,
                  fontFamily: FONTS.Regular,
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
                  color: active == 'Subscribed' ? COLORS.white : COLORS.sblack,
                  fontSize: 15,
                  lineHeight: 20,
                  fontFamily: FONTS.Regular,
                }}>
                Subscribed
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {active == 'All' && (
        <FlatList
          style={{paddingTop: 10}}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={ListData}
          showsVerticalScrollIndicator={false}
        />
      )}
      {/* </ScrollView> */}
    </View>
  );
}
const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: theme.color.bgColor,
    },
    MainView: {
      backgroundColor: theme.color.backgroundColor,
      paddingVertical: 15,
      marginTop: 0.7,
    },
    AllMainView: {
      backgroundColor: theme.color.backgroundColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    FlatListContainer: {
      padding: 15,
      flexDirection: 'row',
      backgroundColor: theme.color.backgroundColor,
      marginBottom: 10,
      flex: 1,
    },
    seperator: {
      backgroundColor: theme.color.gray,
      height: 0.3,
    },
  });
  return styles;
};
