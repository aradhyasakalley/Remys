import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'PRIMARY'}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container]}>
      <Text style={[styles.text]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#315a39',
    padding: 10,
    marginTop: 17,
    marginVertical: 0,
    width: '90%',
    borderRadius: 15,
    alignItems: 'center'
  },

  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
});

export default CustomButton;