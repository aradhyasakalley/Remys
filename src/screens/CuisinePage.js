import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState,useEffect} from 'react';


const CuisinePage = () => {


  return (
    <View style={styles.root}>
      <Text style={styles.text}> Cuisines Page</Text>
      
    </View>
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