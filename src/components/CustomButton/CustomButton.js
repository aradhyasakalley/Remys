import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container,styles[`container_${type}`],]}>
      <Text style={[styles.text,styles[`text_${type}`],]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    
    padding: 10,
    marginTop: 10,
    marginVertical: 0,
    width: '90%',
    borderRadius: 15,
    alignItems: 'center'
  },
  container_PRIMARY:{
    backgroundColor: '#315a39',
  },
  container_TERTIARY:{
    
  },


  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  text_TERTIARY: {
    color: '#7a9f79'
  },
});

export default CustomButton;