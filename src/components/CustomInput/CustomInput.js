import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';


const CustomInput = ({
  control,
  name,
  keyboardType,
  placeholder,
  rules = {},
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#315e26'},
            ]}>
            <TextInput
              value={value}
              keyboardType={keyboardType}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={'#315e26'}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5fbf4',

    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 20,
    width: '100%',
    marginVertical: 5,
  },
  input: {
    color: 'black',
  },
});
