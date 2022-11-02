import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../navigation/AuthProvider';
import CustomButton from '../components/CustomButton/CustomButton';

const HomeScreen = () => {
  const {logout} = useContext(AuthContext);
  return (
    <>
      <Text style={styles.text}>Home Screen</Text>
      <CustomButton 
         text={'logout'}
         style={styles.container}
         onPress={() => logout()}>
        
      </CustomButton>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    alignItems: 'center',
    paddingLeft: 80,
    color: '#97cf8a',
  },
  container: {
    alignItems:'center',
    padding: 10,
    marginTop: 10,
    marginVertical: 0,
    width: '60%',
    borderRadius: 15,
    alignItems: 'center'
  },
});
