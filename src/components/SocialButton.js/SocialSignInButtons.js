import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { AuthContext } from '../../navigation/AuthProvider';
const SocialSignInButtons = (props) => {
  
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  // const onSignInGoogle = (data) => {
  //   const {email, password} = data;
  //   googleLogin(email, password);
  //   console.warn('onSignInGoogle');
  // };

 

  return (
    <>
      <CustomButton
        text="Sign In with Google"
        onPress={props.onPress}
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

// import React from 'react';
// import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import CustomButton from '../CustomButton/CustomButton';

// const SocialSignInButtons = ({
//   buttonTitle,
//   btnType,
//   color,
//   backgroundColor,
//   ...rest
// }) => {
//   let bgColor = backgroundColor;
//   return (
//     <TouchableOpacity
//       style={[styles.buttonContainer, {backgroundColor: bgColor}]}
//       {...rest}>
//       <View style={styles.iconWrapper}>
//         <FontAwesome name={btnType} style={styles.icon} size={22} color={color} />
//       </View>
//       <View style={styles.btnTxtWrapper}>
//         <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default SocialSignInButtons;

// const styles = StyleSheet.create({
//   buttonContainer: {
//     marginTop: 10,
//     width: '100%',
//     padding: 10,
//     flexDirection: 'row',
//     borderRadius: 20,
    
    
//   },
//   iconWrapper: {
//     width: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     fontWeight: 'bold',
//   },
//   btnTxtWrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 18,
    
//     fontWeight: 'bold',
//     fontFamily: 'Lato-Regular',
//   },
// });