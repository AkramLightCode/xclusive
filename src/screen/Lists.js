import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../assest/Images';
import { FONTS} from '../assest/Themes';
import {useTheme, useThemeAwareObject} from '../theme';

export default function Lists() {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.FlatListView}>
        <Text
          style={{
            fontSize: 20,
            color: theme.color.black,
            marginHorizontal: 10,
            fontFamily: FONTS.semiBold,
            lineHeight: 30,
          }}>
          {item.Text}
        </Text>
        <Text
          style={{
            color: theme.color.pink,
            fontSize: 15,
            lineHeight: 18,
            fontFamily: FONTS.Regular,
          }}>
          {item.Text1}
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Image
            style={{
              width: 15,
              height: 15,
              resizeMode: 'contain',
              borderRadius: 8,
            }}
            source={item.imageViews}
          />
          <Image
            style={{
              width: 15,
              height: 15,
              resizeMode: 'contain',
              borderRadius: 8,
            }}
            source={item.imagemen}
          />
          <Image
            style={{
              width: 15,
              height: 15,
              resizeMode: 'contain',
              borderRadius: 8,
            }}
            source={item.imageView}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const OrderListDATA = [
    {
      Text: 'Fans',
      Text1: '0 people',
    },
    {
      Text: 'Following',
      Text1: '3 person',
      imageView: Images.girlimg,
      imageViews: Images.girlimg,
      imagemen: Images.girlimg,
    },
    {
      Text: 'Favorites',
      Text1: '0 people',
    },
    {
      Text: 'Bookmarks',
      Text1: '0 people',
    },
    {
      Text: 'Close friends',
      Text1: '0 people',
    },
  ];

  return (
    <View style={styles.mainview}>
      <View style={{borderTopWidth: 1, borderTopColor: theme.color.bgColor}} />
      <ScrollView>
        <Text
          style={{
            fontSize: 22,
            color: theme.color.black,
            marginHorizontal: 10,
            fontFamily: FONTS.semiBold,
            lineHeight: 30,
            marginTop: 15,
          }}>
          Lists
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={OrderListDATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    mainview: {
      flex: 1,
      paddinVertical: 20,
      backgroundColor: theme.color.bgColor,
    },
    FlatListView: {
      width: 170,
      height: 150,
      borderRadius: 5,
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.backgroundColor,
      marginHorizontal: 10,
    },
  });
  return styles;
};
