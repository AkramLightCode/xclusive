import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import Images from '../assest/Images';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import {useTheme, useThemeAwareObject} from '../theme';

export default function Messages({navigation}) {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();

  const [active, setActive] = useState('Recents', 'All');
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([
    {name: 'Peter Benedict'},
    {name: 'Emilli Salt'},
    {name: 'Jemmy Rayen'},
    {name: 'Peter Benedick'},
    {name: 'Emilli Salt'},
  ]);
  const [masterDataSource, setMasterDataSource] = useState([
    {name: 'Peter Benedict'},
    {name: 'Emilli Salt'},
    {name: 'Jemmy Rayen'},
    {name: 'Peter Benedick'},
    {name: 'Emilli Salt'},
  ]);

  const onPress = v => {
    setActive(v);
  };

  useEffect(() => {
    apiCall();
  }, [navigation]);

  const apiCall = () => {
    setFilteredDataSource(filteredDataSource);
  };

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log();
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ListData = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Chat')}
        style={styles.FlatListMainView}>
        <Image style={styles.ProfileImage} source={Images.profile} />
        <View style={styles.PETERView}>
          <Text style={styles.PETERText}>{item.name.toUpperCase()}</Text>
          <Text style={styles.XclusiveText}>@Xclusive</Text>
          <Text style={styles.MessageLText}>Message Locked</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.Date}>22 mar</Text>
          <View style={styles.LockView}>
            <Image style={styles.LockImage} source={Images.lock} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.Container}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View style={styles.mainview}>
          <Text style={styles.MessagesText}>Messages</Text>
          <View style={styles.SearchbarContainer}>
            <View style={styles.SearchbarinnerView}>
              <TextInput
                placeholder="name"
                onChangeText={text => searchFilterFunction(text)}
                value={search}
                style={styles.Input}
              />
              <TouchableOpacity>
                <Image style={styles.SerchImage} source={Images.search} />
              </TouchableOpacity>
            </View>
            <Image style={styles.PlusImage} source={Images.plus} />
          </View>
          <View style={styles.ButtonContainer}>
            <TouchableOpacity
              onPress={() => onPress('Recents')}
              style={[
                styles.topButton,
                {
                  backgroundColor:
                    active == 'Recents' ? COLORS.pink : COLORS.bgColor,
                },
              ]}>
              <Text
                style={[
                  styles.topText,
                  {
                    color: active == 'Recents' ? COLORS.white : COLORS.sblack,
                  },
                ]}>
                Recents
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress('All')}
              style={[
                styles.topButton,
                {
                  backgroundColor:
                    active == 'All' ? COLORS.pink : COLORS.bgColor,
                  marginLeft: 20,
                },
              ]}>
              <Text
                style={[
                  styles.topText,
                  {
                    color: active == 'All' ? COLORS.white : COLORS.sblack,
                  },
                ]}>
                All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {active == 'Recents' && (
          <FlatList
            data={filteredDataSource}
            renderItem={ListData}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        )}
          {active == 'All' && (
          <FlatList
            data={filteredDataSource}
            renderItem={ListData}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        )}
      {/* </ScrollView> */}
    </View>
  );
}
const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: theme.color.bgColor,
    },
    mainview: {
      backgroundColor: theme.color.backgroundColor,
      padding: 15,
      marginTop: 0.7,
    },
    MessagesText: {
      fontSize: 22,
      color: theme.color.black,
      marginHorizontal: 10,
      fontFamily: FONTS.semiBold,
      lineHeight: 30,
      textTransform: 'capitalize',

    },
    SearchbarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    SearchbarinnerView: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 30,
      paddingHorizontal: 10,
      flex: 1,
      borderColor: COLORS.black,
      backgroundColor: COLORS.white,
    },
    Input: {
      flex: 1,
    },
    SerchImage: {
      width: 20,
      height: 25,
      resizeMode: 'contain',
      tintColor: COLORS.black,
    },
    PlusImage: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
      marginLeft: 20,
      tintColor: theme.color.black,
    },
    ButtonContainer: {
      backgroundColor: theme.color.backgroundColor,
      marginTop: 20,
      flexDirection: 'row',
    },
    FlatListMainView: {
      padding: 15,
      flexDirection: 'row',
      backgroundColor: theme.color.backgroundColor,
      marginTop: 10,
    },
    ProfileImage: {
      height: 50,
      width: 50,
      resizeMode: 'contain',
      borderRadius: 50,
    },
    PETERView: {
      justifyContent: 'center',
      marginLeft: 10,
      marginRight: 'auto',
    },
    PETERText: {
      fontSize: 18,
      color: theme.color.lightblack,
      fontFamily: FONTS.semiBold,
      textTransform: 'capitalize',

    },
    XclusiveText: {
      fontSize: 13,
      lineHeight: 20,
      color: theme.color.lightgray,
      fontFamily: FONTS.Regular,
    },
    MessageLText: {
      fontSize: 14,
      lineHeight: 20,
      color: theme.color.gray,
      marginTop: 5,
      fontFamily: FONTS.Regular,
    },
    Date: {
      fontSize: 13,
      lineHeight: 20,
      color: theme.color.light,
      fontFamily: FONTS.Regular,
    },
    LockView: {
      justifyContent: 'center',
      borderRadius: 50,
      backgroundColor: COLORS.pink,
      padding: 10,
      alignItems: 'center',
      marginTop: 10,
    },
    LockImage: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      tintColor: COLORS.white,
    },
    topButton: {
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 30,
    },
    topText: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: FONTS.Regular,
    },
  });
  return styles;
};
