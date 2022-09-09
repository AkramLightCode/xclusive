import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme, useThemeAwareObject} from '../theme';
import {COLORS} from '../assest/Themes';

// import {COLORS} from '../assest/Themes';

export default function NewPost() {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();
  return (
    <View style={styles.Container}>
      <Text style={styles.NewPostText}>NewPost</Text>
    </View>
  );
}
const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: theme.color.bgColor,
    },
    NewPostText: {
      color: theme.color.black,
    },
  });
  return styles;
};
