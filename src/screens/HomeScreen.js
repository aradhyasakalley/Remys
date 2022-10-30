import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const HomeScreen = () => {
  return (
   <Text style={styles.text}>Home Screen</Text>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({

  text: {
    fontWeight: 'bold',
    fontSize: 35,
    alignItems: 'center',
    paddingLeft:80,
    color: '#97cf8a',
  },
})