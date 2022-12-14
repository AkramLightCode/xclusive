import AsyncStorage from '@react-native-async-storage/async-storage';

var setLoggedIn = async function (isLogin) {
  await AsyncStorage.setItem('loggedin', isLogin);
};

var getLoggedIn = async function () {
  return await AsyncStorage.getItem('loggedin');
};

var setRegToken = async function (isToken) {
  await AsyncStorage.setItem('token', isToken);
};

var getRegToken = async function () {
  return await AsyncStorage.getItem('token');
};

var setApplicationTheme = async function (theme) {
  console.log('theme', JSON.stringify(theme));
  await AsyncStorage.setItem('theme', theme);
};

var getApplicationTheme = async function () {
  return await AsyncStorage.getItem('theme');
};

export {setLoggedIn, getLoggedIn, setRegToken, getRegToken, setApplicationTheme, getApplicationTheme};
