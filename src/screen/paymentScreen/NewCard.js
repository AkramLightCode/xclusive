import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import InputCommon from '../../Component/InputCommon';
import CoustomButton from '../../Component/CoustomButton';
import CommanPicker from '../../Component/CommanPicker';
import {COLORS, FONTS} from '../../assest/Themes';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {label: 'India', value: '1'},
  {label: 'USA', value: '2'},
  {label: 'Uk', value: '3'},
];
const monthData = [
  {label: '01', value: '1'},
  {label: '02', value: '2'},
  {label: '03', value: '3'},
  {label: '04', value: '4'},
  {label: '05', value: '5'},
  {label: '06', value: '6'},
  {label: '07', value: '7'},
  {label: '08', value: '8'},
  {label: '09', value: '9'},
  {label: '10', value: '10'},
  {label: '11', value: '11'},
  {label: '12', value: '12'},
];
const yearData = [
  {label: '2000', value: '1'},
  {label: '1999', value: '2'},
  {label: '1998', value: '3'},
  {label: '1997', value: '4'},
  {label: '1996', value: '5'},
  {label: '1995', value: '6'},
  {label: '1994', value: '7'},
  {label: '1993', value: '8'},
  {label: '1992', value: '9'},
  {label: '1991', value: '10'},
  {label: '1990', value: '11'},
];
export default function NewCard({onClick}) {
  const [Street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [State, setState] = useState('');
  const [postal, setPostal] = useState('');

  const [value, setValue] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const [salect, setSalect] = useState(false);
  const onPress = () => {
    setSalect(salect => !salect);
  };

  return (
    <View style={{flex: 1, paddingBottom: 15}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: 10}}>
          <Text
            style={{
              color: COLORS.black,
              fontWeight: '500',
              fontSize: 16,
              lineHeight: 20,
              marginTop: 10,
              fontFamily: FONTS.medium,
            }}>
            BILLING DETAILS
          </Text>
          <Text
            style={{
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
              backgroundColor: 'white',
              marginTop: 20,
              borderRadius: 5,
              padding: 15,
            }}>
            <View style={{}}>
              <InputCommon
                placeHolder="Street"
                placeholderTextColor={COLORS.gray2}
                value={Street}
                onChangeText={v => {
                  setStreet(v);
                }}
              />
            </View>
            <View style={{marginTop: 15}}>
              <InputCommon
                placeHolder="City"
                placeholderTextColor={COLORS.gray2}
                value={city}
                onChangeText={v => {
                  setCity(v);
                }}
              />
            </View>
            <View style={{marginTop: 15}}>
              <InputCommon
                placeHolder="State/Province"
                placeholderTextColor={COLORS.gray2}
                value={State}
                onChangeText={v => {
                  setState(v);
                }}
              />
            </View>
            <View style={{marginTop: 15}}>
              <InputCommon
                placeHolder="ZIP/Postal Code"
                placeholderTextColor={COLORS.gray2}
                borderWidth={1}
                value={postal}
                onChangeText={v => {
                  setPostal(v);
                }}
              />
            </View>
            <CommanPicker
              data={data}
              searchPlaceholder="Slect Country"
              placeholder={'Country'}
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
              PickerStyle={{marginTop: 20, height: 50}}
            />
          </View>
          <Text
            style={{
              color: COLORS.black,
              fontWeight: '500',
              fontSize: 16,
              lineHeight: 20,
              fontFamily: FONTS.medium,
              marginTop: 20,
            }}>
            CARD DETAILS
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 20,
              padding: 15,
            }}>
            <View style={{}}>
              <InputCommon
                height={50}
                placeHolder="Email"
                placeholderTextColor={COLORS.gray2}
              />
            </View>
            <View style={{marginTop: 15}}>
              <InputCommon
                height={50}
                placeHolder="Name On The Card"
                placeholderTextColor={COLORS.gray2}
              />
            </View>
            <View style={{marginTop: 15}}>
              <InputCommon
                height={50}
                placeHolder="Card Number"
                placeholderTextColor={COLORS.gray2}
              />
            </View>
            <View style={{marginTop: 15}}>
              <InputCommon
                height={50}
                placeHolder="CVV"
                placeholderTextColor={COLORS.gray2}
              />
            </View>
            <Text
              style={{
                marginTop: 15,
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 18,
                color: COLORS.soniksilver,
                fontFamily: FONTS.Regular,
              }}>
              Expiration
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <CommanPicker
                data={monthData}
                searchPlaceholder="Slect MM"
                placeholder={'MM'}
                value={month}
                onChange={item => {
                  setMonth(item.value);
                }}
                PickerStyle={{flex: 0.5, height: 50, marginRight: 5}}
              />
              <CommanPicker
                data={yearData}
                searchPlaceholder="YYYY"
                placeholder={'YYYY'}
                placeholderTextColor={COLORS.gray2}
                value={year}
                onChange={item => {
                  setYear(item.value);
                }}
                PickerStyle={{flex: 0.5, height: 50, marginLeft: 5}}
              />
            </View>
          </View>

          <View
            style={{margin: 15, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                padding: 2,
                borderRadius: 50,
                borderWidth: 0.5,
              }}>
              <TouchableOpacity
                onPress={onPress}
                style={{
                  padding: 8,
                  borderRadius: 15,
                  backgroundColor: salect == true ? 'red' : 'gray',
                }}
              />
            </View>
            <Text style={{fontSize: 13, marginLeft: 5, flex: 1}}>
              Tick here to confirm that you are at least 18 years old and the
              age of majority in your place of residence
            </Text>
          </View>

          <LinearGradient
            style={{marginHorizontal: 15, borderRadius: 7}}
            start={{x: 0, y: 0}}
            end={{x: 1.8, y: 0}}
            colors={['#FC0270', '#6B2063']}>
            <CoustomButton
              onPress={onClick}
              title={'Submit'}
              fontSize={16}
              lineHeight={22}
              fontWeight={500}
              color={COLORS.white}
              elevation={10}
              height={50}
            />
          </LinearGradient>
{/* 
          <CoustomButton
            onPress={() => {
              props.navigation.navigate('Sign_up');
            }}
            title={'Submit'}
            fontSize={16}
            color={COLORS.white}
            backgroundColor={COLORS.pink}
            MargH={15}
            Redius={7}
            height={50}
            elevation={10}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
