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
import {COLORS, FONTS} from '../assest/Themes';

export default function Lists() {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.7} style={{marginBottom: 0, paddingHorizontal: 10}}>
        <View style={styles.FlatListView}>
          <Text
            style={{
              fontSize: 22,
              color: COLORS.lightblack,
              fontWeight: '600',
              marginHorizontal: 10,
              fontFamily: FONTS.bold,
              lineHeight: 30,
            }}>
            {item.Text}
          </Text>
          <Text
            style={{
              color: COLORS.pink,
              fontSize: 15,
              fontWeight: '400',
              lineHeight: 18,
              fontFamily: FONTS.semiBold,
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
      <ScrollView>
        <Text
          style={{
            fontSize: 22,
            color: COLORS.black,
            fontWeight: '600',
            marginHorizontal: 10,
            fontFamily: FONTS.bold,
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

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    paddingHorizontal: 8,
    paddinVertical: 20,
  },
  FlatListView: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
