import {View, Text,StyleSheet,BlurView} from 'react-native';
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
        tabBarStyle: { height: 50 },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Cuisines') {
            iconName = focused ? 'pizza' : 'pizza-outline';
          }
          else if (route.name === 'Faviorates') {
            iconName = focused ? 'heart' : 'heart-outline';
          }
          else if (route.name === 'Support') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: '#449f37',
        tabBarInactiveTintColor: 'gray',
        
        headerShown:false,
        tabBarShowLabel:false
        
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

    style: {
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 40,
      marginHorizontal: 20,
      // Max Height...
      height: 60,
      borderRadius: 10,
      // Shadow...
      shadowColor: '#000',
      shadowOpacity: 0.06,
      shadowOffset: {
        width: 10,
        height: 10
      },
      paddingHorizontal: 20,
    },
    navigatorContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      // SHADOW
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    navigator: {
      borderTopWidth: 0,
      backgroundColor: 'transparent',
      elevation: 30
    },
  
});



