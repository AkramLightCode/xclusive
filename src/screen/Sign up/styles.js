import {StyleSheet} from 'react-native';
import {FONTS} from '../../assest/Themes';

export default StyleSheet.create({
  continue: {
    flex: 1,
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
