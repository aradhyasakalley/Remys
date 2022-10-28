import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomTab from '../navigation/BottomTab';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name = 'sign in' component={SignInScreen}   />
        <Stack.Screen  name = 'sign up' component={SignUpScreen}   />
        <Stack.Screen  name = 'home screen' component={HomeScreen}   />
        <Stack.Screen  name = 'bottom' component={BottomTab}   />

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;