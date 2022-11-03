import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext, AuthProvider} from '../navigation/AuthProvider';
import CustomButton from '../components/CustomButton/CustomButton';

const HomeScreen = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.root}>
      <Text style={styles.root}>logged in </Text>
      <CustomButton text={'logout'} onPress={() => logout()}></CustomButton>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor:'#FDFDFF',
    padding:20,
  },
  // text: {
  //   fontWeight: 'bold',
  //   fontSize: 35,
  //   alignItems: 'center',
  //   paddingLeft: 80,
  //   color: '#97cf8a',
  // },
  // container: {
  //   color: '#97cf8a',
  //   alignItems: 'center',
  //   padding: 10,
  //   marginTop: 10,
  //   marginVertical: 0,
  //   width: '60%',
  //   borderRadius: 15,
  //   alignItems: 'center',
  // },
});
