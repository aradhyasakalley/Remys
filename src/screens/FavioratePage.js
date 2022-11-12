import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavioratePage = () => {
  return (
    <View style={styles.root}  >
      <Text style = {styles.text} >favorites page</Text>
    </View>
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




