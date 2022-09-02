import {
    Text,
    StyleSheet,
    View,
    Switch,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import {COLORS, FONTS} from '../assest/Themes';
  import Images from '../assest/Images';
  
  const Drawersetting = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={{flex: 1,backgroundColor:'white'}}>
        <View style={{margin: 25}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: COLORS.black,
            alignSelf: 'center',
            marginTop: 10,
            lineHeight: 22,
            fontFamily: FONTS.bold,
          }}>
          Setting
        </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:20}}>
            <Text style={{fontSize:16,color:'black'}}>Notification</Text>
            <View style={{marginLeft: 'auto'}}>
              <Switch
                trackColor={{false: '#ccc', true: COLORS.razzmatazz}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
                navigation.navigate('ChangePassword')
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              // backgroundColor: 'red',
            }}>
            <Text style={{fontSize:16,color:'black'}}>Change Password</Text>
            <Image
              style={{height: 15, width: 15, resizeMode: 'contain',marginRight:10,tintColor:'black'}}
              source={Images.Rightarrow}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({});
  export default Drawersetting;
  