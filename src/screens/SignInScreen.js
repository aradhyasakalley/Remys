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
    navigation.navigate('home screen');
  };
  const onCreateNewPressed = () => {
    navigation.navigate('sign up');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
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
              message: '*password should me atleast 6 characters long',
            },
          }}
        />

        <CustomButton text={'Login'} onPress={handleSubmit(onSignInPressed)} />
        <CustomButton
          text={'create new account'}
          onPress={onCreateNewPressed}
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

/*const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');*/
