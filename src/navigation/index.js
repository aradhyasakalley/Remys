import {View, Text,useEffect} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomTab from './BottomTab';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '645032777616-fsutikabs1u5evsnfko6tg5qt8uabo57.apps.googleusercontent.com',
  //   });
  // }, []);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="sign in" component={SignInScreen} />
      <Stack.Screen name="sign up" component={SignUpScreen} />
      {/* <Stack.Screen  name = 'home screen' component={HomeScreen}   />
        <Stack.Screen  name = 'bottom' component={BottomTab}   />  */}
    </Stack.Navigator>
  );
};

export default Navigation;
