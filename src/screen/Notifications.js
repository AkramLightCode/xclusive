import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import Images from '../assest/Images';
import {useTheme, useThemeAwareObject} from '../theme';

export default function Notifications() {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();

  const [activeButton, setActiveButton] = useState(
    'All',
    'Interactions',
    'Liked',
    'Subscribed',
  );

  const onChangButton = item => {
    setActiveButton(item);
  };

  const buttonData = [
    {title: 'All'},
    {title: 'Interactions'},
    {title: 'Liked'},
    {title: 'Subscribed'},
  ];

  const buttonItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onChangButton(item.title)}
        style={[
          styles.All,
          {
            backgroundColor:
              item.title == activeButton ? COLORS.pink : COLORS.bgColor,
          },
        ]}>
        <Text
          style={[
            styles.AllText,
            {color: item.title == activeButton ? COLORS.white : COLORS.sblack},
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
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
        <FlatList
          horizontal
          data={buttonData}
          renderItem={buttonItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
      </View>
      {activeButton == 'All' && (
        <FlatList
          style={{paddingTop: 10}}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={ListData}
          showsVerticalScrollIndicator={false}
        />
      )}
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
