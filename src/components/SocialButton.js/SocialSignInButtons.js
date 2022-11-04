import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    const {email, password} = data;
    googleLogin(email, password);
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#d4e3fc"
        fgColor="#4285F4"
        type='SECONDARY'
        
      />
      {/* <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      /> */}
    </>
  );
};

export default SocialSignInButtons;
