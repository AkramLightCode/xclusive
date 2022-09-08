import * as React from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../assest/Themes';

export default class InputCommon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: '',
    };
  }
  render() {
    return (
      <View style={{backgroundColor: this.props.isbackColor}}>
        {this.props.istitle && (
          <View style={[this.props.titelStyle, styles.TextView]}>
            <Text style={[styles.TextStyles, {color: '#4A4B4D'}]}>
              {this.props.title}
            </Text>
          </View>
        )}
        <View style={[styles.inputStyle, this.props.inputStyle]}>
          {this.props.isLeftimg && (
            <View style={{}}>
              <Image
                resizeMode="contain"
                source={this.props.typeIcon}
                style={{height: 20, width: 20}}
              />
            </View>
          )}
          <TextInput
            style={[
              styles.textValue,
              {
                textAlignVertical: this.props.textAlignVertical,
              },
            ]}
            placeholder={this.props.placeHolder}
            value={this.props.value}
            placeholderTextColor={this.props.placeholderTextColor}
            returnKeyType={this.props.returnKeyType}
            onChangeText={this.props.onChangeText}
            onSubmitEditing={this.props.onSubmitEditing}
            keyboardType={this.props.keyboardType}
            secureTextEntry={this.props.secureTextEntry}
            ref={this.props.ref}
            fontWeight={this.props.fontWeight}
            blurOnSubmit={this.props.blurOnSubmit}
            maxLength={this.props.maxLength}
            numberOfLines={this.props.numberOfLines}
            multiline={this.props.multiline}
            autoFocus={this.autoFocus}
            autoCapitalize={this.props.autoCapitalize}
          />
          {this.props.showIcon && (
            <TouchableOpacity onPress={this.props.onPress}>
              <Image
                resizeMode="contain"
                source={this.props.showpassIcon}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textValue: {
    fontSize: 14,
    marginHorizontal: 5,
    flex: 1,
    color:COLORS.black
  },
  inputViewStyles: {},

  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor:COLORS.gray2,
    backgroundColor: COLORS.white,
  },
});
