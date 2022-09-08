import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import CoustomButton from '../../Component/CoustomButton';
import Images from '../../assest/Images';
import {COLORS, FONTS} from '../../assest/Themes';
import LinearGradient from 'react-native-linear-gradient';

const data = ['', ''];
const renderItem = ({item}) => (
  <View
    style={{
      borderWidth: 0.2,
      padding: 10,
      borderColor: COLORS.brightgray,
      borderRadius: 5,
      marginTop: 20,
    }}>
    <View style={{flexDirection: 'row',   }}>
      <View style={{flex: 0.8}}>
        <Text
          style={{
            color: COLORS.black,
            fontWeight: '500',
            fontSize: 15,
            lineHeight: 20,
            fontFamily: FONTS.medium,
          }}>
          Peter Benedict
        </Text>
        <Text
          style={{
            color: COLORS.shadegray,
            fontWeight: '600',
            fontSize: 15,
            letterSpacing: 3,
            fontFamily: FONTS.semiBold,
          }}>
          **** **** **** **54
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginTop: 7,
            fontWeight: '500',
            lineHeight: 18,
            color: COLORS.shadegray,
            fontFamily: FONTS.medium,
          }}>
          Shakti Tower, EN 60,5th Floor, Sector V,Saltlake, Kolkata 700091
          Kolkata, India
        </Text>
      </View>
      <View style={{flex: 0.2, alignItems: 'flex-end'}}>
        <TouchableOpacity
          style={{
            borderRadius: 40 / 2,
            backgroundColor: COLORS.bgColor,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}>
          <Image
            source={Images.delete}
            style={{width: 14, height: 14, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default class YourCard extends Component {
  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
        <LinearGradient
          style={{
            borderRadius: 7,
            alignSelf: 'flex-end',
            marginVertical: 20,
            height: 50,
            justifyContent: 'center',
            paddingHorizontal: 30,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1.8, y: 0}}
          colors={['#FC0270', '#6B2063']}>
          <CoustomButton
            onPress={this.props.onPress}
            title={'Add Card'}
            fontSize={16}
            lineHeight={22}
            fontWeight={500}
            color={COLORS.white}
            elevation={10}
          />
        </LinearGradient>
        <View
          style={{
            width: '100%',
            backgroundColor: COLORS.white,
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingBottom: 20,
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

const styles = StyleSheet.create({});
