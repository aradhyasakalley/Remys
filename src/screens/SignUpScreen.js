import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Logo from '../../assets/images/image2.png';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {AuthContext} from '../navigation/AuthProvider';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regPhone = /^[0]?[789]\d{9}$/;
const regDob =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

const SignUpScreen = () => {
  const {register} = useContext(AuthContext);
  const height = {useWindowDimensions};
  const navigation = useNavigation();
  // const [email,setEmail] = useState('');
  // const [password,setPassword] = useState('');
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSignUpPressed = data => {
    const {email, password} = data;
    //navigation.navigate('sign in');
    register(email, password);
    console.log(email, password);
  };
  const onHaveAccPressed = data => {
    navigation.navigate('sign in');
  };
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.root}>
        <Text style={styles.text2}>
          Create a New <Text style={styles.link2}>Account</Text>{' '}
        </Text>
       
        {/* <Image style={styles.logo} source={Logo} resizeMode={'contain'} /> */}
        <CustomInput
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          onChange={value => setEmail(value)}
          control={control}
          rules={{
            required: '*email required',
            pattern: {value: reg, message: '*invalid email'},
          }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          onChange={value => setPassword(value)}
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
          keyboardType="phone-pad"
          rules={{
            required: '*Phone Number required',
            pattern: {value: regPhone, message: '*invalid Phone Number'},
          }}
        />
        <CustomInput
          name="dob"
          placeholder="Date of Birth"
          control={control}
          keyboardType="numbers-and-punctuation	          "
          rules={{
            required: '*Date of birth required',
            pattern: {value: regDob, message: '*invalid Date of birth'},
          }}
        />

        <CustomButton
          text={'Sign Up'}
          onPress={handleSubmit(onSignUpPressed)}
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>
         

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center'}}>or</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
        
        <Text style={styles.text3}>
          Already have an account?{' '}
          <Text style={styles.link} onPress={onHaveAccPressed}>
            Login
          </Text>{' '}
          
          
        </Text>


        {/* <CustomButton
          text={'Already have an account? Login.'}
          onPress={onHaveAccPressed}
          type="TERTIARY"
        /> */}
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

// const styles = StyleSheet.create({
//   root: {
//     backgroundColor:'#acd1af',
//     alignContent:'center',
//     padding: 35,
//   },
//   logo: {
//     alignContent:'center',
//     width: '80%',
//     maxWidth: 900,
//     height: 300,
//     width: 800,
//     paddingBottom: 100,
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize: 40,
//     textAlign:'center',

//     color: '#97cf8a',
//   },
//   text_new: {
//     fontWeight: 'bold',
//     fontSize: 45,
//     alignItems: 'center',

//     color: '#315e26',
//   },
// });

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f1faf0',
    padding: 20,
    marginTop:20
  },
  text: {
    color: 'gray',
    marginVertical: 10,
    textAlign:'center'
  },
  link: {
    color: '#2fa027',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    maxWidth: 900,
    height: 300,
  },
  textheader: {
    fontSize: 40,
    fontFamily: 'Lobster-Regular',
    textAlign: 'center',
    color: '#419834',
  },

  text_new: {
    fontWeight: 'bold',
    fontSize: 45,
    alignItems: 'center',

    color: '#315e26',
  },
  text2: {
    color: '#021717',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 40,
    textShadowColor: 'black',
    textShadowOffset: {width: -2, height: 0},
    textShadowRadius: 5,
  },
  link2: {
    color: '#2fa027',
    textAlign: 'center',
    textShadowColor: 'green',
    textShadowOffset: {width: -2, height: 0},
    textShadowRadius: 5,
  },
  text3: {
    color: 'black',
    marginVertical: 10,
    textAlign:'center',
    fontSize:15
  },
  link3: {
    color: '#1a5615',
  },
});
