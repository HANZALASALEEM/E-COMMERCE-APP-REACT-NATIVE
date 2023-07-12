import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageView}>
        <Image
          source={require('../images/user-photo.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.name}>HANZALA</Text>
      <Text style={styles.email}>hanzala@gmail.com</Text>
      <TouchableOpacity style={styles.menu}>
        <Text style={[styles.menuItem, {marginTop: 40}]}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu}>
        <Text style={styles.menuItem}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu}>
        <Text style={styles.menuItem}>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu}>
        <Text style={styles.menuItem}>Payment Method</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu}>
        <Text style={[styles.menuItem, {color: '#ff2121'}]}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageView: {
    marginTop: 80,
  },
  image: {
    width: 130,
    height: 130,
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    color: 'black',
  },
  menu: {
    width: '90%',
    marginTop: 30,
    borderBottomWidth: 0.4,
    borderColor: '#cfcfcf',
  },
  menuItem: {
    fontSize: 18,
    color: 'black',
    marginLeft: 5,
  },
});
