import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react';
import {AuthContext, AuthProvider} from '../navigation/AuthProvider';
import CustomButton from '../components/CustomButton/CustomButton';
const SupportPage = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.root}  >

      <Text style={styles.text}>Support page</Text>
      <CustomButton text={'Log out'} onPress={() => logout()}></CustomButton>
    </View>
  )
}

export default SupportPage;

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