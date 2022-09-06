import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Images from '../assest/Images';
import {COLORS, FONTS} from '../assest/Themes';
import {
  DEFAULT_DARK_THEME,
  DEFAULT_DARK_THEME_ID,
  DEFAULT_LIGHT_THEME,
  DEFAULT_LIGHT_THEME_ID,
  useTheme,
  useThemeAwareObject,
} from '../theme';
import {getApplicationTheme, setApplicationTheme} from '../utils/Preference';

const CostomDrawer = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {theme, setTheme, toggleTheme} = useTheme();
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const styles = useThemeAwareObject(drawerStyles);

  useEffect(() => {
    getThemeInLocalStorage();
  }, []);

  useEffect(() => {
    console.log(isEnabled);
    setTheme(isEnabled ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME);
    saveThemeInLocalStorage();
  }, [isEnabled]);

  const saveThemeInLocalStorage = async () => {
    setApplicationTheme(
      isEnabled ? DEFAULT_DARK_THEME_ID : DEFAULT_LIGHT_THEME_ID,
    );
  };

  const getThemeInLocalStorage = async () => {
    try {
      const savedTheme = await getApplicationTheme();
      setIsEnabled(savedTheme === DEFAULT_LIGHT_THEME_ID ? false : true);
      setTheme(
        savedTheme === DEFAULT_LIGHT_THEME_ID
          ? DEFAULT_LIGHT_THEME
          : DEFAULT_DARK_THEME,
      );
    } catch (e) {
      setIsEnabled(true);
    }
  };

  const data = [
    {logo: Images.profileIcon, title: 'My profile'},
    {logo: Images.RightIcon, title: 'Bookmark'},
    {logo: Images.TreehLine, title: 'Lists'},
    {logo: Images.Setting, title: 'Setting'},
    {logo: Images.Cards, title: 'Your Cards'},
    {logo: Images.Addbank, title: 'Add Bank (To Earn)'},
    {logo: Images.HelfIcon, title: 'Help & Support'},
    {logo: Images.DarkActive, title: 'Dark Mode'},
    {logo: Images.enlishIcon, title: 'English'},
    {logo: Images.logout, title: 'Logout'},
  ];
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.Myprofile}
        onPress={() => {
          if (index === 0) {
            navigation.navigate('MyProfile');
          } else if (index === 1) {
            navigation.navigate('Bookmark');
          } else if (index === 4) {
            navigation.navigate('MyHomeStackScreens', {screen: 'Payment'});
          } else if (index === 7) {
            toggleSwitch();
          } else if (index === 9) {
            navigation.navigate('Sign_in');
          } else if (index === 6) {
            navigation.navigate('HelpSupport');
          }
        }}>
        <Image style={styles.profileimg} source={item.logo} />
        <Text style={styles.Text}>{item.title}</Text>

        {index === 7 && (
          <View style={{marginLeft: 'auto'}}>
            <Switch
              trackColor={{false: '#ccc', true: COLORS.razzmatazz}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setIsEnabled}
              value={isEnabled}
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: theme.color.backgroundColor}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainview}>
          <Image
            resizeMode="cover"
            source={Images.profile}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              alignSelf: 'center',
              marginTop: 30,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: COLORS.white,
              textAlign: 'center',
              marginTop: 20,
              fontFamily: FONTS.semiBold,
            }}>
            Gail Forcewind
          </Text>
          <Text
            style={{
              color: COLORS.pigpink,
              fontSize: 11,
              textAlign: 'center',
              fontWeight: '400',
              fontFamily: FONTS.Regular,
            }}>
            info@gmail.com
          </Text>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.Strawberry,
                paddingVertical: 15,
                flex: 0.5,
                alignItems: 'center',
                elevation: 0.5,
                marginLeft: 0.5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 17,
                  color: COLORS.white,
                  fontWeight: '500',
                  fontFamily: FONTS.semiBold,
                }}>
                05
                <Text
                  style={{
                    fontSize: 13,
                    color: COLORS.white,
                    fontWeight: '500',
                    fontFamily: FONTS.semiBold,
                  }}>
                  {' '}
                  Fans
                </Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.Strawberry,
                paddingVertical: 15,
                flex: 0.5,
                alignItems: 'center',
                elevation: 0.5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 17,
                  color: COLORS.white,
                  fontWeight: '500',
                  fontFamily: FONTS.semiBold,
                }}>
                20
                <Text
                  style={{
                    fontSize: 13,
                    color: COLORS.white,
                    fontWeight: '500',
                    fontFamily: FONTS.semiBold,
                  }}>
                  {' '}
                  Following
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};
const drawerStyles = theme => {
  const styles = StyleSheet.create({
    mainview: {
      backgroundColor: COLORS.razzmatazz,
      paddingTop: 20,
    },
    Myprofile: {
      height: 40,
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 20,
      marginTop: 10,
    },
    profileimg: {
      width: 18,
      height: 18,
      resizeMode: 'contain',
      tintColor: theme.color.black,
    },
    Text: {
      marginLeft: 20,
      fontSize: 14,
      color: theme.color.black,
      fontWeight: '400',
      fontFamily: FONTS.semiBold,
    },
  });
  return styles;
};
export default CostomDrawer;
