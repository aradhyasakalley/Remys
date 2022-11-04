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
import Logo from '../../assets/images/signinpagelogo.png';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import SocialSignInButtons from '../components/SocialButton.js/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {AuthContext} from '../navigation/AuthProvider';
import SocialButton1 from '../components/GoogleButton/SocialButton1';

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
        <Text style={styles.text}>
          Welcome to {''}
          <Text style={styles.link}>Remy</Text>{' '}
        </Text>

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

        {/* <Text style={styles.textor}>--------------------      or      --------------------</Text> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center',color:'black'}}>or</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
        <SocialSignInButtons />

        <Text style={styles.text2}>
          Dont have an account?{' '}
          <Text style={styles.link} onPress={onCreateNewPressed}>
            Create one
          </Text>{' '}
        </Text>

        {/* <CustomButton
          text={'Dont have an account? Create one.'}
          onPress={onCreateNewPressed}
          type="TERTIARY"
        /> */}
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f1faf0',
    padding: 20,
  },

  logo: {
    width: '100%',
    maxWidth: 900,
    height: 300,
  },

  text_new: {
    fontWeight: 'bold',
    fontSize: 45,
    alignItems: 'center',

    color: '#315e26',
  },
  textor: {
    textAlign: 'center',
    color: '#315e26',
  },
  text: {
    color: '#021717',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 30,

    textShadowColor: '#145236',
    textShadowOffset: {width: -2, height: 0},
    textShadowRadius: 5,
    
    fontWeight: '600',
  },
  link: {
    color: '#66c559',
    
    textAlign: 'center',
    fontWeight: '800',
  },
  text2: {
    color: 'gray',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 15,
  },
});

/*const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');*/
