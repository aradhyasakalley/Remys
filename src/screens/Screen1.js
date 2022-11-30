import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton/CustomButton'
import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/images/firstpageimage.png';
const Screen1 = () => {
  const navigation = useNavigation();
  const onItalianPressed = data => {
    navigation.navigate('italian');
  };
  const onChinesePressed = data => {
    navigation.navigate('chinese');
  };
  const onFrenchPressed = data => {
    navigation.navigate('french');
  };
  const onJapanesePressed = data => {
    navigation.navigate('japanese');
  };
  const onIndianPressed = data => {
    navigation.navigate('indian');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Select a Cuisine</Text>
      <CustomButton text={'italian'} onPress={onItalianPressed}></CustomButton>
      <CustomButton text={'french'} onPress={onFrenchPressed}></CustomButton>
      <CustomButton text={'japanese'} onPress={onJapanesePressed}></CustomButton>
      <CustomButton text={'indian'} onPress={onIndianPressed}></CustomButton>
      <CustomButton text={'chinese'} onPress={onChinesePressed}></CustomButton>
      <Image style={styles.logo} source={Logo} resizeMode={'contain'} />
      
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding:20,
    
  },
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign:'center',
    color: '#97cf8a',
  },
  logo: {
    width: '100%',
    maxWidth: 900,
    height: 550,
  },

})