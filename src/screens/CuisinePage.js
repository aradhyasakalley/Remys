import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CuisinePage = () => {
  return (
    <View  style={styles.root} >
      <Text  style={styles.text}>Cuisines page</Text>
    </View>
  )
}

export default CuisinePage;

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