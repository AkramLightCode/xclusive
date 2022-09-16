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
        <Image style={styles.profileImage} source={Images.profile} />
        <View style={styles.PeterContainer}>
          <View style={styles.PetermainView}>
            <Text style={styles.PeterText}>Peter Benedict</Text>
            <Text style={styles.DayText}>2 days ago</Text>
          </View>
          <Text style={styles.XclusiveText}>@Xclusive</Text>
          <Text style={styles.TextView}>
            <Text style={styles.LoremText}>Lorem ipsum</Text>
            <Text style={styles.dolorText}>
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
        <Text style={styles.NotificationsText}>Notifications</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.AllMainView}>
            <TouchableOpacity
              onPress={() => onPress('All')}
              style={[
                styles.All,
                {
                  backgroundColor:
                    active == 'All' ? COLORS.pink : COLORS.bgColor,
                },
              ]}>
              <Text
                style={[
                  styles.AllText,
                  {color: active == 'All' ? COLORS.white : COLORS.sblack},
                ]}>
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress('Interactions')}
              style={[
                styles.Interactions,
                {
                  backgroundColor:
                    active == 'Interactions' ? COLORS.pink : COLORS.bgColor,
                },
              ]}>
              <Text
                style={[
                  styles.InteractionsText,
                  {
                    color:
                      active == 'Interactions' ? COLORS.white : COLORS.sblack,
                  },
                ]}>
                Interactions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress('Liked')}
              style={[
                styles.Liked,
                {
                  backgroundColor:
                    active == 'Liked' ? COLORS.pink : COLORS.bgColor,
                },
              ]}>
              <Text
                style={[
                  styles.LikedText,
                  {color: active == 'Liked' ? COLORS.white : COLORS.sblack},
                ]}>
                Liked
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress('Subscribed')}
              style={[
                styles.Subscribed,
                {
                  backgroundColor:
                    active == 'Subscribed' ? COLORS.pink : COLORS.bgColor,
                },
              ]}>
              <Text
                style={[
                  styles.SubscribedText,
                  {
                    color:
                      active == 'Subscribed' ? COLORS.white : COLORS.sblack,
                  },
                ]}>
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
    seperator: {
      backgroundColor: theme.color.gray,
      height: 0.3,
    },
    MainView: {
      backgroundColor: theme.color.backgroundColor,
      paddingVertical: 15,
      marginTop: 0.7,
    },
    NotificationsText: {
      fontSize: 22,
      color: theme.color.black,
      marginHorizontal: 10,
      fontFamily: FONTS.semiBold,
      lineHeight: 30,
    },
    AllMainView: {
      backgroundColor: theme.color.backgroundColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    All: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 30,
      marginLeft: 15,
    },
    AllText: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: FONTS.Regular,
    },
    Interactions: {
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      marginLeft: 15,
    },
    InteractionsText: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: FONTS.Regular,
    },
    Liked: {
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      marginLeft: 15,
    },
    LikedText: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: FONTS.Regular,
    },
    Subscribed: {
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      marginLeft: 15,
      marginRight: 15,
    },
    SubscribedText: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: FONTS.Regular,
    },

    FlatListContainer: {
      padding: 15,
      flexDirection: 'row',
      backgroundColor: theme.color.backgroundColor,
      marginBottom: 10,
      flex: 1,
    },
    profileImage: {
      height: 50,
      width: 50,
      resizeMode: 'contain',
      borderRadius: 50,
    },
    PeterContainer: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 10,
    },
    PetermainView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    PeterText: {
      fontSize: 18,
      color: theme.color.lightblack,
      lineHeight: 25,
      fontFamily: FONTS.semiBold,
    },
    DayText: {
      fontSize: 13,
      lineHeight: 20,
      color: theme.color.light,
      fontFamily: FONTS.Regular,
    },
    XclusiveText: {
      fontSize: 13,
      lineHeight: 20,
      color: theme.color.lightgray,
      fontFamily: FONTS.Regular,
    },
    TextView: {
      flexDirection: 'row',
      marginTop: 5,
      flex: 1,
    },
    LoremText: {
      fontSize: 14,
      lineHeight: 20,
      color: theme.color.gray,
      fontFamily: FONTS.medium,
    },
    dolorText: {
      color: theme.color.gray,
      fontSize: 14,
      lineHeight: 20,
      fontFamily: FONTS.Regular,
    },
  });
  return styles;
};
