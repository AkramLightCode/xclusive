import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Images from '../assest/Images';
import {COLORS} from '../assest/Themes';

const Search = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View style={{flex: 1, marginHorizontal: 20, marginVertical: 10}}>
      <View style={styles.SearchbarContainer}>
        <View style={styles.SearchbarinnerView}>
          <TextInput
            placeholder="Search"
            onChangeText={text => setSearchValue(text)}
            value={searchValue}
            style={styles.Input}
          />
          <TouchableOpacity>
            <Image style={styles.SerchImage} source={Images.search} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
});
export default Search;
