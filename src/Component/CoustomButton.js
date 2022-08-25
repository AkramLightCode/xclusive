import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {FONTS} from '../assest/Themes';

export default class CoustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          this.props.buttonStyle,
          ,
          styles.container,
          {
            height: this.props.height,
            width: this.props.width,
            marginHorizontal: this.props.MargH,
            marginVertical: this.props.Margv,
            backgroundColor: this.props.backgroundColor,
            borderColor: this.props.borderColor,
            borderWidth: this.props.borderWidth,
            paddingHorizontal: this.props.paddingH,
            marginTop: this.props.marginT,
            borderRadius: this.props.Redius,
            borderRadius: this.props.Redius,
          },
        ]}>
        <Text
          style={[
            {
              fontSize: this.props.fontSize,
              color: this.props.color,
              elevation: this.props.iselevation,
              marginHorizontal: this.props.textmarginh,
              marginVertical: this.props.margv,
              fontWeight: this.props.fweight,
              borderColor: this.isbordercolor,
            },
            {fontFamily: FONTS.medium},
          ]}>
          {this.props.title}
        </Text>
        {this.props.isimage && (
          <Image
            resizeMode="contain"
            style={{height: 25, width: 25, position: 'absolute', left: 60}}
          />
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
