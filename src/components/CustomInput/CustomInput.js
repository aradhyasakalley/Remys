import { StyleSheet, Text, TextInput, View ,sec} from 'react-native'
import React from 'react'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
          <TextInput 
          value={value}
          onChangeText={setValue}
          placeholder={placeholder} 
          style={styles.input}
          secureTextEntry={secureTextEntry}
          />
          
        </View>
  )
}

export default CustomInput;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f4f0ec',
      
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 8,
      paddingHorizontal: 10,
      width: '100%',
      marginVertical: 10,
    },
    input: {
      color: 'black'
    },
  })