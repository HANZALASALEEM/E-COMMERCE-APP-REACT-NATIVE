import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.banner}>LOGIN</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <CustomButton
        style={styles.btn}
        title={'Login'}
        bg={'#d5d503'}
        color={'black'}
      />
      <TouchableOpacity
        style={styles.secondryBtn}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  banner: {
    fontSize: 44,
    alignSelf: 'center',
    color: 'black',
    margin: 50,
  },
  input: {
    width: '90%',
    height: 60,
    borderWidth: 0.5,
    margin: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  btn: {
    marginTop: 20,
  },
  secondryBtn: {
    margin: 20,
  },
});
