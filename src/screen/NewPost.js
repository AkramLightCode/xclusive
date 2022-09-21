import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme, useThemeAwareObject} from '../theme';
import {COLORS} from '../assest/Themes';
import Video from 'react-native-video';

// import {COLORS} from '../assest/Themes';

export default function NewPost() {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();
  return (
    <View style={styles.Container}>
      {/* <Video
        source={require('../assest/icon/video.mp4')}
        // play={true}
        // duration={2}
        style={styles.vidio}
        repeat={false}
        value={10}
        hideShutterView={true}
        playWhenInactive={true}
        progressUpdateInterval={10}
        type='auto'
      /> */}
    </View>
  );
}
const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: theme.color.bgColor,
      justifyContent:'center',alignItems:'center'
    },
    NewPostText: {
      color: theme.color.black,
    },
    vidio:{width:'100%'}
  });
  return styles;
};
