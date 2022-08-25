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

const data = ['', '', ''];
const renderItem = ({item}) => (
  <View
    style={{
      flexDirection: 'row',
      borderWidth: 0.2,
      padding: 20,
      borderRadius: 5,
      marginTop: 20,
    }}>
    <View style={{flex: 0.8}}>
      <Text
        style={{
          fontSize: 12,
          color: COLORS.shadegray,
          fontWeight: '400',
          lineHeight: 17,
          fontFamily: FONTS.medium,
        }}>
        14 March, 2021
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: COLORS.black,
          fontWeight: '500',
          lineHeight: 22,
          fontFamily: FONTS.medium,
        }}>
        Peter Benedict
      </Text>
      <Text
        style={{
          fontSize: 13,
          color: COLORS.shadegray,
          fontWeight: '500',
          lineHeight: 20,
          fontFamily: FONTS.medium,
        }}>
        New music! a special video? Tip Amount :{' '}
        <Text
          style={{
            fontSize: 13,
            fontWeight: '700',
            fontFamily: FONTS.medium,
            color: COLORS.shadegray,
          }}>
          $30
        </Text>
      </Text>
      <TouchableOpacity>
        <View style={styles.Buttonview}>
          <Text
            style={{
              color: COLORS.white,
              fontWeight: '400',
              fontSize: 12,
              fontFamily: FONTS.medium,
            }}>
            Paid
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={{flex: 0.2, alignItems:'center'}}>
      <TouchableOpacity
        style={{
          borderRadius: 40 / 2,
          backgroundColor: COLORS.bgColor,
          padding:7
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
          padding:7

        }}>
        <Image
          source={Images.eyeimg}
          style={{width: 15, height: 15, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default class PaymentScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 10}}>
        <Text
          style={{
            marginHorizontal: 15,
            marginVertical: 10,
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 18,
            color: COLORS.shadegray,
            fontFamily: FONTS.medium,
          }}>
          We are fully compliant with Payment Card Industry Data Security
          Standards.
        </Text>

        <View
          style={{
            backgroundColor: COLORS.white,
            paddingHorizontal: 20,
            margin: 10,
            paddingBottom: 20,
            borderRadius: 7,
          }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item}
          />
        </View>
      </View>
    );
  }
}

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
});
