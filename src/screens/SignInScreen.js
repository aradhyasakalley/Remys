import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Logo from '../../assets/images/logo1.png';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import SocialSignInButtons from '../components/SocialButton.js/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {AuthContext} from '../navigation/AuthProvider';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const SignInScreen = () => {
  const {login, googleLogin} = useContext(AuthContext);

  const height = {useWindowDimensions};
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSignInPressed = data => {
    //validate
    const {email, password} = data;
    login(email, password);
    //navigation.navigate('bottom');
  };
  const onCreateNewPressed = () => {
    navigation.navigate('sign up');
  };
  const signInGooglePressed = () => {
    const {email, password} = data;
    googleLogin(email, password);
  };
  return (
    <ScrollView style={styles.root}>
      <View style={styles.root}>
       
         
        <Text style={styles.text}>Welcome to Remy </Text>

        <Image style={styles.logo} source={Logo} resizeMode={'contain'} />

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
          }}
        />
        {/* <CustomButton text={'Sign in with google'} onPress={onSignInPressed}/>  */}
        <CustomButton text={'Login'} onPress={handleSubmit(onSignInPressed)} />
        <SocialSignInButtons />
        <CustomButton
          text={'Dont have an account? Create one.'}
          onPress={onCreateNewPressed}
          type="TERTIARY"
        />
        
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor:'#f1faf0',
    padding:20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    maxWidth: 900,
    height: 400,
  },
  text: {
    
    fontSize: 35,
    fontFamily:'Lobster-Regular',
    textAlign:'center',
    color: '#419834',
  },

  text_new: {
    fontWeight: 'bold',
    fontSize: 45,
    alignItems: 'center',

    color: '#315e26',
  },

 
});

/*const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');*/
