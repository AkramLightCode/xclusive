import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import CostomDrawer from '../Component/CostomDrawer';
import Chat from '../screen/Chat';
import ForgotPassword from '../screen/ForgotPassword/ForgotPassword';
import Home from '../screen/Home';
import Lists from '../screen/Lists';
import Messages from '../screen/Messages';
import MyProfile from '../screen/MyProfile';
import NewPost from '../screen/NewPost';
import Notifications from '../screen/Notifications';
import Payment from '../screen/Payment';
import Registration from '../screen/Registration/Registration';
import ResetPassword from '../screen/ResetPassword/ResetPassword';
import Settings from '../screen/Settings';
import Sign_in from '../screen/Sign up/index';
import Splesh from '../screen/Splesh';
import TopTab from './TopTab';
import HelpSupport from '../screen/HelpSupport';
import Drawersetting from '../screen/Drawersetting';
import ChangePassword from '../screen/ChangePassword';
import Search from '../screen/Search';
import Bookmark from '../screen/Bookmark';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStacks = createNativeStackNavigator();
const MyHomeStack = createNativeStackNavigator();

export default function Route() {
  function DrawerNavigation() {
    return (
      <Drawer.Navigator
        drawerContent={props => <CostomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          swipeEnabled: false,
          drawerPosition: 'right',
        }}>
        <Drawer.Screen
          name="TabStack"
          component={TabStack}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    );
  }

  function HomeStacksScreen() {
    return (
      <HomeStacks.Navigator screenOptions={{headerShown: false}}>
        <HomeStacks.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
        />
      </HomeStacks.Navigator>
    );
  }

  function MyHomeStackScreens() {
    return (
      <MyHomeStack.Navigator>
        <MyHomeStack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <MyHomeStack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
        <MyHomeStack.Screen
          name="Bookmark"
          component={Bookmark}
          options={{headerShown: false}}
        />
        <MyHomeStack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: false}}
        />
      </MyHomeStack.Navigator>
    );
  }
  function TabStack() {
    return (
      <Tab.Navigator
        tabBar={props => <TopTab {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="MyHomeStackScreens"
          component={MyHomeStackScreens}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="NewPost"
          component={NewPost}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Lists"
          component={Lists}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splesh">
        <Stack.Screen
          name="Splesh"
          component={Splesh}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign_in"
          component={Sign_in}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeStacksScreen"
          component={HomeStacksScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HelpSupport"
          component={HelpSupport}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Drawersetting"
          component={Drawersetting}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
