import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SupportPage = () => {
  return (
    <View>
      <Text style={styles.text}>Support page</Text>
    </View>
  )
}

export default SupportPage;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    alignItems: 'center',
    paddingLeft:80,
    color: '#97cf8a',
  },
})