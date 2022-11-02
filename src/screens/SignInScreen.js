import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TextInput,
  ScrollView,
  
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/images/logo1.png';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';



const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const SignInScreen = () => {
  const height = {useWindowDimensions};
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSignInPressed = data => {
    //validate
    
    navigation.navigate('bottom');

  };
  const onCreateNewPressed = () => {
    navigation.navigate('sign up');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.text}>Please Login to</Text>
        <Text style={styles.text}>continue</Text>
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

        <CustomButton text={'Login'} onPress={handleSubmit(onSignInPressed)} />
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
    alignItems: 'center',
    padding: 40,
  },
  logo: {
    width: '100%',
    maxWidth: 900,
    height: 400,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 40,
    alignItems: 'center',

    color: '#315e26',
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
