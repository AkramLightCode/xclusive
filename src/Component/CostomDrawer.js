import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
  FlatList,
  StatusBar,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Images from '../assest/Images';
import {COLORS, FONTS} from '../assest/Themes';
import API from '../services/API';
import {LOGOUT_ENDPOINT} from '../services/ApiEndpoints';
import {
  DEFAULT_DARK_THEME,
  DEFAULT_DARK_THEME_ID,
  DEFAULT_LIGHT_THEME,
  DEFAULT_LIGHT_THEME_ID,
  useTheme,
  useThemeAwareObject,
} from '../theme';
import {
  getApplicationTheme,
  getRegToken,
  setApplicationTheme,
  setRegToken,
  // setLoggedIn,
  // getLoggedIn,
} from '../utils/Preference';
import LoaderIndicator from '../comman/LoaderIndicator';
import SimpleToast from 'react-native-simple-toast';

const CostomDrawer = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {theme, setTheme, toggleTheme} = useTheme();
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const styles = useThemeAwareObject(drawerStyles);
  const [loading, setLoading] = useState(false);
  const [is_Token, setIs_Token] = useState('');

  useEffect(() => {
    getThemeInLocalStorage();
    getDataToken();
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

  const getDataToken = async () => {
    try {
      const token = await getRegToken();
      console.warn('token=====token: ', token);
      setIs_Token(token);
    } catch (e) {
      console.log('=====e: ', e);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Are You Sure',
      '',
      [
        {text: 'Ok', onPress: () => logoutApi()},
        {
          text: 'Cancel',
          onPress: () => console.log('No button clicked'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const logoutApi = () => {
    setLoading(true)
    const payload = {};
    API.post(LOGOUT_ENDPOINT, payload, is_Token)
      .then(res => {
        console.log('res.data.user===========: ', res);
        setRegToken('');
        navigation.replace('Sign_in');
        console.log('\n\n\n\n\n Response =>' + JSON.stringify(res));
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        SimpleToast.show('Something Want Wrong');
      });
  };

  const data = [
    {logo: Images.profileIcon, title: 'My profile'},
    {logo: Images.RightIcon, title: 'Bookmarks'},
    {logo: Images.TreehLine, title: 'Lists'},
    {logo: Images.Setting, title: 'Settings'},
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
          } else if (index === 3) {
            navigation.navigate('Drawersetting');
          } else if (index === 4) {
            navigation.navigate('MyHomeStackScreens', {screen: 'Payment'});
          } else if (index === 6) {
            navigation.navigate('HelpSupport');
          } else if (index === 7) {
            toggleSwitch();
          } else if (index === 9) {
            // navigation.navigate('Sign_in');
            // alert('Logout');
            handleLogout();
          } else if (index === 6) {
            navigation.navigate('HelpSupport');
          }
        }}>
        <Image style={styles.profileimg}  source={item.logo} />
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
            style={styles.ProfileImage}
          />
          <Text
            style={styles.GailText}>
            Gail Forcewind
          </Text>
          <Text
            style={styles.infoText}>
            info@gmail.com
          </Text>

          <View style={styles.fansfollowingContainer}>
            <TouchableOpacity
              style={styles.common}>
              <Text
                style={styles.fiveText}>
                05
              </Text>
              <Text
                style={styles.FansText}>
                Fans
              </Text>
            </TouchableOpacity>
            <View
              style={{
                borderLeftWidth: 0.5,
                height: '100%',
                borderLeftColor: 'white',
              }}
            />
            <TouchableOpacity
              style={styles.common}>
              <Text
                style={styles.TwentyText}>
                20
              </Text>
              <Text
                style={styles.FollowingText}>
                Following
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
      <LoaderIndicator loading={loading} />
    </View>
  );
};
const drawerStyles = theme => {
  const styles = StyleSheet.create({
    mainview: {
      backgroundColor: COLORS.razzmatazz,
      paddingTop: 20,
    },
    ProfileImage: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignSelf: 'center',
      marginTop: 30,
    },
    GailText: {
      fontSize: 16,
      fontWeight: '500',
      color: COLORS.white,
      textAlign: 'center',
      marginTop: 20,
      fontFamily: FONTS.semiBold,
    },
    infoText: {
      color: COLORS.pigpink,
      fontSize: 11,
      textAlign: 'center',
      fontWeight: '400',
      fontFamily: FONTS.Regular,
    },
    fansfollowingContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    common: {
      backgroundColor: COLORS.Strawberry,
      paddingVertical: 15,
      flex: 0.5,
      alignItems: 'center',
      elevation: 0.5,
      marginLeft: 0.5,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    fiveText: {
      textAlign: 'center',
      fontSize: 17,
      color: COLORS.white,
      fontFamily: FONTS.medium,
      marginRight: 5,
    },
    FansText: {
      fontSize: 13,
      color: COLORS.white,
      fontFamily: FONTS.Regular,
    },
    TwentyText: {
      fontSize: 17,
      color: COLORS.white,
      fontFamily: FONTS.medium,
      marginRight: 5,
    },
    FollowingText: {
      fontSize: 13,
      color: COLORS.white,
      fontFamily: FONTS.Regular,
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
      fontFamily: FONTS.Regular,
    },

  });
  return styles;
};
export default CostomDrawer;
