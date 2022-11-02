import { StyleSheet, Text, View ,Image,useWindowDimensions, ScrollView,TextInput,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Logo from '../../assets/images/signup.jpg'
import CustomInput from '../components/CustomInput/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form';



const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regPhone = /^[0]?[789]\d{9}$/;
const regDob = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;


const SignUpScreen = () => {
  
 
  const height = {useWindowDimensions};
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSignUpPressed = (data) => {
    navigation.navigate('sign in');
   
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
              message: '*password should be atleast 6 characters long',
            },
            maxLength: {
              value: 10,
              message: '*password can be maximum 10 characters long',
            },
          }}
        />
        <CustomInput
          name="Phone"
          placeholder="Phone Number"
          control={control}
          rules={{
            required: '*Phone Number required',
            pattern: {value: regPhone, message: '*invalid Phone Number'},
          }}
        />
        <CustomInput
          name="dob"
          placeholder="Date of Birth"
          control={control}
          
          rules={{
            required: '*Date of birth required',
            pattern: {value: regDob, message: '*invalid Date of birth'},
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
     
      width: '80%',
      maxWidth: 900,
      height: 250,
      width:500
    },
    text: {
      fontWeight: 'bold',
      fontSize: 40,
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
  