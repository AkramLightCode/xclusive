import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS} from '../assest/Themes';


export default function CommanPicker({
  PickerStyle,
  data,
  placeholder,
  searchPlaceholder,
  value,
  onFocus,
  onChange,
}) {
  return (
    <View style={[PickerStyle, styles.containor]}>
      <Dropdown
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectedTextStyle: {fontSize: 14, color: COLORS.gray2},
  placeholderStyle: {fontSize: 14, color: COLORS.gray2},
  containor: {
    borderWidth: 0.2,
    backgroundColor: COLORS.white,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderColor:COLORS.gray2,
    justifyContent: 'center',
    borderRadius:3
    
  },
});
