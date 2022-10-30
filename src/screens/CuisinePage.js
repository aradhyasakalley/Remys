import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CuisinePage = () => {
  return (
    <View>
      <Text  style={styles.text}>Cuisines page</Text>
    </View>
  )
}

export default CuisinePage;

const styles = StyleSheet.create({
  text: {
    
    fontWeight: 'bold',
    fontSize: 35,
    alignItems: 'center',
    paddingLeft:80,
    color: '#97cf8a',
  },


})