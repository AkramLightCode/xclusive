import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS, FONTS} from '../assest/Themes';
import {useTheme, useThemeAwareObject} from '../theme';

export default function CommanPicker({
  PickerStyle,
  data,
  placeholder,
  searchPlaceholder,
  value,
  onFocus,
  onChange,
}) {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme();
  return (
    <View style={[PickerStyle, styles.containor]}>
      <Dropdown
        // containerStyle={{backgroundColor: theme.color.backgroundColor}}
        // selectedTextProps={{color: theme.color.gray2}}
        // itemContainerStyle={{color: theme.color.gray2}}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        dropdownPosition='auto'
      />
    </View>
  );
}

const dashboardStyles = theme => {
  const styles = StyleSheet.create({
    selectedTextStyle: {
      fontSize: 14,
      color: theme.color.gray2,
      fontFamily: FONTS.Regular,
    },
    placeholderStyle: {
      fontSize: 14,
      color: theme.color.gray2,
      fontFamily: FONTS.Regular,
    },
    containor: {
      borderWidth: 0.2,
      backgroundColor: theme.color.backgroundColor,
      borderColor: 'gray',
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderColor: theme.color.gray2,
      justifyContent: 'center',
      borderRadius: 3,
    },
  });
  return styles;
};
