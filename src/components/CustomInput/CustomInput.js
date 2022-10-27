import {StyleSheet, Text, TextInput, View, sec} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  control,
  name,
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
            style={[styles.container, {borderColor: error ? 'red' : 'black'}]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && <Text style = {{color: 'red' ,alignSelf:'stretch'}}>{error.message || 'Error'}</Text>}
        </>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f0ec',

    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
    marginVertical: 10,
  },
  input: {
    color: 'black',
  },
});
