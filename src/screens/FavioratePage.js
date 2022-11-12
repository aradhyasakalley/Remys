import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react';
import {AuthContext, AuthProvider} from '../navigation/AuthProvider';
import CustomButton from '../components/CustomButton/CustomButton';

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
// const Tab = createMaterialTopTabNavigator();
const FavioratePage = () => {
  const {logout} = useContext(AuthContext);
  
  return (
    <View style={styles.root}  >

      <Text style={styles.text}>Faviorate page</Text>
      <CustomButton text={'Log out'} onPress={() => logout()}></CustomButton>
      
    </View>
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={Screen1} />
    //   <Tab.Screen name="Settings" component={Screen2} />
    // </Tab.Navigator>
  )
}

export default FavioratePage;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign:'center',
    color: '#97cf8a',
  },
  root: {
    backgroundColor:'#FDFDFF',
    padding:20,
  },
})




