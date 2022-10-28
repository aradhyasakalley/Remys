import { StyleSheet, Text, View ,Image,useWindowDimensions, ScrollView} from 'react-native'
import React,{useState} from 'react'
import Logo from '../../assets/images/rata.png'
import CustomInput from '../components/CustomInput/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form';
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const SignUpScreen = () => {
  
 
  const height = {useWindowDimensions};
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSignUpPressed = (data) => {
    navigation.navigate('sign in')
  }
  const onHaveAccPressed = (data) => {
    navigation.navigate('sign in')
  }
  
  return (
   <ScrollView>
    <View style = {styles.root}>
      <Text style={styles.text}>Create New </Text>
      <Text style={styles.text}>Account</Text>
      <Image style = {styles.logo}source = {Logo} resizeMode={'contain'}/>
      <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: '*email required',
            pattern: {value: reg, message: '*invalid email'},
          }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: '*password required',
            minLength: {
              value: 6,
              message: '*password should me atleast 6 characters long',
            },
            maxLength: {
              value: 10,
              message: '*password can be maximum 10 characters long',
            },
          }}
        />
        <CustomButton  text={'signup'} onPress={handleSubmit(onSignUpPressed)} />
        <CustomButton
          text={'Already have an account? Login.'}
          onPress={onHaveAccPressed}
          type = "TERTIARY"
        />
        
    </View>
    </ScrollView>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 40,
    },
    logo: {
     
      width: '100%',
      maxWidth: 500,
      height: 350,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 45,
      alignItems: 'center',
    
      color: '#97cf8a',
    },
    text_new: {
      fontWeight: 'bold',
      fontSize: 45,
      alignItems: 'center',
      
      color: '#315e26',
    },
  });
  