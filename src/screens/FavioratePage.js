import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavioratePage = () => {
  return (
    <View>
      <Text style = {styles.text} >Faviorates page</Text>
    </View>
  )
}

export default FavioratePage;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    alignItems: 'center',
    paddingLeft:80,
    color: '#97cf8a',
  },
})