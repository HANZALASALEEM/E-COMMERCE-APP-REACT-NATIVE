import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const addUser = () => {
    firestore()
      .collection('Users')
      .add({
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.banner}>SIGN UP</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => {
          setName(text);
        }}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone No"
        onChangeText={text => {
          setPhoneNumber(text);
        }}
        value={phoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => {
          setEmail(text);
        }}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => {
          setPassword(text);
        }}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={text => {
          setConfirmPassword(text);
        }}
        value={confirmPassword}
      />

      <CustomButton
        style={styles.btn}
        title={'Sign Up'}
        bg={'#d5d503'}
        color={'black'}
        onClick={() => {
          addUser();
        }}
      />
      <TouchableOpacity
        style={styles.secondryBtn}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

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
    margin: 10,
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
