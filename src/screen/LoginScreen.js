import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const login = () => {
    firestore()
      .collection('Users')

      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.docs[0]._data);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.banner}>LOGIN</Text>
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
      <CustomButton
        style={styles.btn}
        title={'Login'}
        bg={'#d5d503'}
        color={'black'}
        onClick={() => {
          login();
        }}
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
