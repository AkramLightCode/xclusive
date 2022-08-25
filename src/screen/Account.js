import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import Images from '../assest/Images';

export default function Account() {
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <View style={styles.mainview}>
        <View style={[styles.secondview, {marginTop: 0}]}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 20,
              }}>
              User Name
            </Text>

            <TextInput
              style={{
                height: 35,
                flex: 1,
                fontWeight: '400',
                fontSize: 14,
                color: COLORS.shadegray,
                fontFamily: FONTS.light,
              }}
              placeholder="@peterbenedict19"
              placeholderTextColor={COLORS.shadegray}
              keyboardType="name-phone-pad"
            />
          </View>
          <TouchableOpacity>
            <Image
              source={Images.Rightarrow}
              style={{width: 14, height: 14, resizeMode: 'contain',tintColor:COLORS.black}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.secondview}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 20,
              }}>
              Email Address
            </Text>
            <TextInput
              style={{height: 35, flex: 1, fontWeight: '400', fontSize: 14,color: COLORS.shadegray,
              fontFamily: FONTS.light,}}
              placeholder="peterbenedict19@dummy.com"
              placeholderTextColor={COLORS.shadegray}
              keyboardType="email-address"
            />
          </View>
          <TouchableOpacity>
            <Image
              source={Images.Rightarrow}
              style={{width: 15, height: 15, resizeMode: 'contain',tintColor:COLORS.black}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.secondview}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontWeight: '500',
                lineHeight: 20,
                fontSize: 15,
              }}>
              Phone Number
            </Text>
            <TextInput
              style={{height: 35, flex: 1, fontWeight: '400', fontSize: 14,color: COLORS.shadegray,
              fontFamily: FONTS.light,}}
              placeholder="+1 987 456 1234"
              placeholderTextColor={COLORS.shadegray}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity>
            <Image
              source={Images.Rightarrow}
              style={{width: 15, height: 15, resizeMode: 'contain',tintColor:COLORS.black}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          color: COLORS.black,
          fontSize: 16,
          fontWeight: '500',
          lineHeight: 25,
          fontFamily: FONTS.semiBold,
        }}>
        LINKED ACCOUNTS
      </Text>
      <View style={styles.mainview}>
        <View style={[styles.secondview, {marginTop: 0}]}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontWeight: '500',
                lineHeight: 20,
                fontSize: 15,
              }}>
              Twitter account
            </Text>
            <TextInput
              style={{height: 35, flex: 1, fontWeight: '400', fontSize: 14,color: COLORS.shadegray,
              fontFamily: FONTS.light,}}
              placeholder="https://twitter/creators/dine-with-desi/"
              placeholderTextColor={COLORS.shadegray}
              keyboardType="twitter"
            />
          </View>
          <TouchableOpacity>
            <Image
              source={Images.Rightarrow}
              style={{width: 15, height: 15, resizeMode: 'contain',tintColor:COLORS.black}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.secondview}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontWeight: '500',
                lineHeight: 20,
                fontSize: 15,
              }}>
              Google Account
            </Text>
            <TextInput
              style={{height: 35, flex: 1, fontWeight: '400', fontSize: 14,color: COLORS.shadegray,
              fontFamily: FONTS.light,}}
              placeholder="https://twitter/creators/dine-with-desi/"
              placeholderTextColor={COLORS.shadegray}
              keyboardType="twitter"
            />
          </View>
          <TouchableOpacity>
            <Image
              source={Images.Rightarrow}
              style={{width: 15, height: 15, resizeMode: 'contain',tintColor:COLORS.black}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          color: COLORS.black,
          fontSize: 16,
          fontWeight: '500',
          lineHeight: 25,
          fontFamily: FONTS.semiBold,
        }}>
        SECURITY
      </Text>
      <View style={styles.mainview}>
        <View style={[styles.secondview, {marginTop: 0}]}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontWeight: '500',
                lineHeight: 20,
                fontSize: 15,
              }}>
              Password
            </Text>
            <TextInput
              style={{height: 35, flex: 1, fontWeight: '400', fontSize: 14,color: COLORS.shadegray,
              fontFamily: FONTS.light,}}
              placeholder="*********"
              placeholderTextColor={COLORS.shadegray}
              keyboardType="name-phone-pad"
              secureTextEntry={true}
              maxLength={15}
            />
          </View>
          <TouchableOpacity>
            <Image
              source={Images.Rightarrow}
              style={{width: 15, height: 15, resizeMode: 'contain',tintColor:COLORS.black}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.secondview}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontWeight: '500',
                fontSize:15,
                lineHeight:20
              }}>
              Login Session
            </Text>
            <TextInput
              style={{height: 35, flex: 1, fontWeight: '400', fontSize: 14,color: COLORS.shadegray,
              fontFamily: FONTS.light,}}
              placeholder="Chrome 89.0, Windows 10"
              placeholderTextColor={COLORS.shadegray}
            />
          </View>
          <TouchableOpacity>
            <Image
              source={Images.Rightarrow}
              style={{width: 15, height: 15, resizeMode: 'contain',tintColor:COLORS.black}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: COLORS.white,
    padding: 15,
    marginTop: 10,
    borderRadius: 7,
    marginBottom: 20,
  },
  secondview: {
    borderWidth: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
});
