import { StyleSheet, Text, View ,Image,useWindowDimensions} from 'react-native'
import React,{useState} from 'react'
import Logo from '../../assets/images/logo1.png'
import CustomInput from '../components/CustomInput/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
 
  const height = {useWindowDimensions};
  const navigation = useNavigation();
  const onSignInPressed = () => {
    
    //validate
    navigation.navigate('home screen');
  }
  const onCreateNewPressed = () => {
    
    navigation.navigate('sign up');
  }
  return (
    <View style = {styles.root}>
      <Image style = {styles.logo}source = {Logo} resizeMode={'contain'}/>
      <CustomInput
          
          
          placeholder="Email"
          value={email}
          setValue={setEmail}
          
        />
        <CustomInput
          
          
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry = {true}
          
        />
        <CustomButton  text={'Login'} onPress={onSignInPressed} />
        <CustomButton text={'create new account'} onPress={onCreateNewPressed}/>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 40,
    },
    logo: {
     
      width: '100%',
      maxWidth: 500,
      height: 400,
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
  