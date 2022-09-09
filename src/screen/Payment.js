import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../assest/Themes';
import NewCard from './paymentScreen/NewCard';
import YourCard from './paymentScreen/YourCard';
import PaymentScreen from './paymentScreen/Payment';
import {useTheme, useThemeAwareObject} from '../theme';

export default function Payment() {
  const styles = useThemeAwareObject(dashboardStyles);
  const {theme} = useTheme ();
  const [active, setActive] = useState(1);
  const onPress = v => {
    setActive(v);
  };

  return (
    <View style={styles.Container}>
        <View style={styles.MainView}>
          <Text
            style={{
              fontSize: 22,
              color:theme.color.black,
              marginHorizontal: 10,
              fontFamily: FONTS.semiBold,
              lineHeight: 30,
            }}>
            Payment
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 5,
              marginTop: 10,
            }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => onPress(1)}
                style={{
                  backgroundColor: active == 1 ? COLORS.pink : COLORS.bgColor,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: active == 1 ? COLORS.white : COLORS.sblack,
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.Regular,
                  }}>
                  Your Cards
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPress(2)}
                style={{
                  backgroundColor: active == 2 ? COLORS.pink : COLORS.bgColor,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: active == 2 ? COLORS.white : COLORS.sblack,
                    fontSize: 15,
                    lineHeight: 20,
                    fontFamily: FONTS.Regular,
                  }}>
                  Payments
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        {active == 1 && <YourCard onPress={() => onPress(3)} />}
        {active == 3 && <NewCard onClick={() => onPress(1)} />}
        {active == 2 && <PaymentScreen />}
    </View>
  );
}
const dashboardStyles = theme => {

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor: theme.color.bgColor,
  },
  MainView:{
    backgroundColor: theme.color.backgroundColor,
    padding: 10
    },
});
return styles;
};