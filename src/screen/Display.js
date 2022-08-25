import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import Images from '../assest/Images';

export default function Display() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{flex: 1}}>
      <View style={styles.mainview}>
        <View style={styles.secondview}>
          <View>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 20,
              }}>
              Language
            </Text>
            <TextInput
              style={{
                color: COLORS.shadegray,
                fontWeight: '400',
                fontSize: 15,
                fontFamily: FONTS.light,
              }}
              placeholder="English"
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
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 20,
              }}>
              Dark Theme
            </Text>
            <View>
              <Switch
                trackColor={{false: '#ccc', true: '#EC1E79'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          
        </View>
                  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: COLORS.white,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 7,
    paddingVertical: 20,
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
