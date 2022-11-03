// import {View, Text, StyleSheet, Pressable} from 'react-native';
// import React from 'react';

// const CustomButton = ({onPress, text, type = 'PRIMARY'}) => {
//   return (
//     <Pressable
//       onPress={onPress}
//       style={[styles.container, styles[`container_${type}`]]}>
//       <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
//     </Pressable>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     marginTop: 10,
//     marginVertical: 0,
//     width: '90%',
//     borderRadius: 15,
//     alignItems: 'center',
//   },
//   container_PRIMARY: {
//     backgroundColor: '#315a39',
//   },
//   container_TERTIARY: {},

//   text: {
//     fontWeight: 'bold',
//     fontSize: 15,
//     color: 'white',
//   },
//   text_TERTIARY: {
//     color: '#7a9f79',
//   },
// });

// export default CustomButton;


import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor,btnType,color}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
      
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignContent:'center',
    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#93d68a',
    borderRadius:20,
    shadowColor: '#571e22',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },

  container_SECONDARY: {
    borderColor: '#d4e3fc',
    borderWidth: 2,
    borderRadius:20,
    shadowColor: '#bb6411',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    
  },

  container_TERTIARY: {
    
  },

  text: {
    fontWeight: 'bold',
    color: '#33792a',
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },

  text_TERTIARY: {
    color: '#315a39',
  },
});

export default CustomButton;

