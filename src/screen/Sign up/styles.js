import {StyleSheet} from 'react-native';
import {FONTS} from '../../assest/Themes';

const signUpStyles = theme => {
  const styles = StyleSheet.create({
    continue: {
      flex: 1,
      backgroundColor: theme.color.backgroundColor,
    },
    Image: {
      width: 80,
      height: 80,
      alignSelf: 'center',
      marginTop: 50,
    },
    errorText: {
      color: 'red',
      marginLeft: 'auto',
      fontSize: 12,
      fontFamily: FONTS.medium,
    },
  });
  return styles;
};

export default signUpStyles;
