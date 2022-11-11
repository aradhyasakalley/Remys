import {View, Text, StyleSheet, BlurView} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CuisinePage from '../screens/CuisinePage';
import FavioratePage from '../screens/FavioratePage';
import SupportPage from '../screens/SupportPage';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {height: 50},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cuisines') {
            iconName = focused ? 'pizza' : 'pizza-outline';
          } else if (route.name === 'Faviorates') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Support') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: '#449f37',
        tabBarInactiveTintColor: 'gray',
        
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cuisines" component={CuisinePage} />
      <Tab.Screen name="Faviorates" component={FavioratePage} />
      <Tab.Screen name="Support" component={SupportPage} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  
});
