import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {COLORS} from '../assest/Themes';

const Loader = props => {
  const {loading} = props;
  return loading ? (
    <View style={styles.loaderContainer}>
      <View style={styles.indicator}>
        <ActivityIndicator
          size={'large'}
          animating={loading}
          color={COLORS.pink}
        />
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  loaderContainer: {
    zIndex: 1,
    elevation: 2,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#00000097',
    color: 'red',
  },
  indicator: {
    height: 40,
    width: 40,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
