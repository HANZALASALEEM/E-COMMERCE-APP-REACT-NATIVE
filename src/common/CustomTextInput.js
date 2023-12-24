import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({placeholder, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '90%',
    borderRadius: 10,
    borderWidth: 0.7,
    alignSelf: 'center',
    marginVertical: 10,
  },
  input: {
    padding: 10,
  },
});
