import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState,useEffect} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1';

import Italian from './Italian';
import French from './French';
import Indian from './Indian';
import Japanese from './Japanese';
import Chinese from './Chinese';


const Stack = createNativeStackNavigator();
const CuisinePage = () => {


  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="screen1" component={Screen1} />
      <Stack.Screen name="italian" component={Italian} />
      <Stack.Screen name="french" component={French} />
      <Stack.Screen name="japanese" component={Japanese} />
      <Stack.Screen name="indian" component={Indian} />
      <Stack.Screen name="chinese" component={Chinese} />

      
    </Stack.Navigator>
  );
};

export default CuisinePage;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: '#97cf8a',
  },
  root: {
    backgroundColor: '#FDFDFF',
    padding: 20,
  },
});



// https://api.spoonacular.com/recipes/random?number=1&apiKey=e042e0c751074d1c99ac2a2b6407f951