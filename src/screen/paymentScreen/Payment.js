import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Images from '../../assest/Images';
import {COLORS, FONTS} from '../../assest/Themes';
import {useTheme, useThemeAwareObject} from '../../theme';
import {ScrollView} from 'react-native-gesture-handler';

export default function YourCard() {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();
  const data = ['', '', ''];
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 0.2,
          padding: 20,
          borderRadius: 5,
          marginTop: 20,
          borderColor: theme.color.black,
        }}>
        <View style={{flex: 0.8}}>
          <Text
            style={{
              fontSize: 12,
              color: theme.color.shadegray,
              lineHeight: 17,
              fontFamily: FONTS.Regular,
            }}>
            14 March, 2021
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: theme.color.black,
              lineHeight: 22,
              fontFamily: FONTS.medium,
            }}>
            Peter Benedict
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: theme.color.shadegray,
              fontWeight: '500',
              lineHeight: 20,
              fontFamily: FONTS.Regular,
            }}>
            New music! a special video? Tip Amount :{' '}
            <Text
              style={{
                fontSize: 14,
                fontFamily: FONTS.Regular,
                color: theme.color.shadegray,
              }}>
              $30
            </Text>
          </Text>
          <TouchableOpacity>
            <View style={styles.Buttonview}>
              <Text
                style={{
                  color: theme.color.white,
                  fontWeight: '400',
                  fontSize: 12,
                  fontFamily: FONTS.Regular,
                }}>
                Paid
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              borderRadius: 40 / 2,
              backgroundColor: COLORS.bgColor,
              padding: 7,
            }}>
            <Image
              source={Images.delete}
              style={{width: 14, height: 14, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 40 / 2,
              backgroundColor: COLORS.bgColor,
              marginTop: 10,
              padding: 7,
            }}>
            <Image
              source={Images.eyeimg}
              style={{width: 15, height: 15, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <ScrollView>
        <Text
          style={{
            marginHorizontal: 15,
            marginVertical: 10,
            fontSize: 14,
            lineHeight: 18,
            color: theme.color.shadegray,
            fontFamily: FONTS.medium,
          }}>
          We are fully compliant with Payment Card Industry Data Security
          Standards.
        </Text>

        <View style={styles.FlatListMainView}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    Buttonview: {
      width: 50,
      height: 25,
      backgroundColor: COLORS.green,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    FlatListMainView: {
      backgroundColor: theme.color.backgroundColor,
      paddingHorizontal: 20,
      margin: 10,
      paddingBottom: 20,
      borderRadius: 7,
      marginBottom:30
    },
  });
  return styles;
};
