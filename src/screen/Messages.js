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
// import {useEffect} from 'react/cjs/react.production.min';

export default function Messages({navigation}) {
  const [active ,setActive ] =useState('Recents','All')
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
    // setFilteredDataSource();
    // setMasterDataSource();
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
        style={{
          padding: 15,
          flexDirection: 'row',
          backgroundColor: COLORS.white,
          marginTop: 10,
        }}>
        <Image
          style={{
            height: 50,
            width: 50,
            resizeMode: 'contain',
            borderRadius: 50,
          }}
          source={Images.profile}
        />
        <View
          style={{
            justifyContent: 'center',
            marginLeft: 10,
            marginRight: 'auto',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: COLORS.lightblack,
              lineHeight: 25,
              fontFamily: FONTS.medium,
            }}>
            {item.name.toUpperCase()}
          </Text>
          <Text
            style={{
              fontSize: 13,
              lineHeight: 20,
              fontWeight: '400',
              color: COLORS.lightgray,
              fontFamily: FONTS.semiBold,
            }}>
            @Xclusive
          </Text>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 20,
              fontWeight: '500',
              color: COLORS.gray,
              marginTop: 5,
              fontFamily: FONTS.Regular,
            }}>
            Message Locked
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={{
              fontSize: 13,
              lineHeight: 20,
              fontWeight: '400',
              color: COLORS.light,
              fontFamily: FONTS.semiBold,
            }}>
            22 mar
          </Text>
          <View
            style={{
              justifyContent: 'center',
              borderRadius: 50,
              backgroundColor: COLORS.pink,
              padding: 10,
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                tintColor: COLORS.white,
              }}
              source={Images.lock}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainview}>
          <Text style={styles.MessagesText}>Messages</Text>
          <View style={styles.SearchbarContainer}>
            <View style={styles.SearchbarinnerView}>
              <TextInput
                placeholder="name"
                onChangeText={(text) => searchFilterFunction(text)}
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
              style={{
                backgroundColor:
                  active == 'Recents' ? COLORS.pink : COLORS.bgColor,
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderRadius: 30,
              }}>
              <Text
                style={{
                  color: active == 'Recents' ? COLORS.white : COLORS.sblack,
                  fontWeight: '400',
                  fontSize: 15,
                  lineHeight: 20,
                  fontFamily: FONTS.semiBold,
                }}>
                Recents
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress('All')}
              style={{
                backgroundColor: active == 'All' ? COLORS.pink : COLORS.bgColor,
                marginLeft: 20,
                paddingHorizontal: 35,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
              }}>
              <Text
                style={{
                  color: active == 'All' ? COLORS.white : COLORS.sblack,
                  fontWeight: '400',
                  fontSize: 15,
                  lineHeight: 20,
                  fontFamily: FONTS.semiBold,
                }}>
                All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {active == 'Recents' && (
          <FlatList
            // style={{paddingBottom: 20}}
            data={filteredDataSource}
            renderItem={ListData}
            keyExtractor={(item, index) => index.toString()}
            // extraData={refreshItem}
          />
        )}
         {active == 'All' && (
          <FlatList
            // style={{paddingBottom: 20}}
            data={filteredDataSource}
            renderItem={ListData}
            keyExtractor={(item, index) => index.toString()}
            // extraData={refreshItem}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  mainview: {
    backgroundColor: COLORS.white,
    padding: 15,
    marginTop: 0.7,
  },
  MessagesText: {
    fontSize: 22,
    color: COLORS.black,
    fontWeight: '600',
    marginHorizontal: 10,
    fontFamily: FONTS.bold,
    lineHeight: 30,
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
    tintColor: COLORS.black,
  },
  ButtonContainer: {
    backgroundColor: COLORS.white,
    marginTop: 20,
    flexDirection: 'row',
  },
});
