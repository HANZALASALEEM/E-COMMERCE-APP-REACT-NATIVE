import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '../common/Header';
import {useNavigation} from '@react-navigation/native';

const Addresses = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        title={'My Addresses'}
        leftIcon={require('../images/left-arrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('AddAddress');
        }}>
        <Image source={require('../images/add.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Addresses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  addButton: {
    backgroundColor: 'orange',
    height: 60,
    width: 60,
    position: 'absolute',
    bottom: 40,
    right: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
});
