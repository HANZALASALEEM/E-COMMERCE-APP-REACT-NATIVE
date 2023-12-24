import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../common/Header';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';

const AddAddress = () => {
  const [stateName, setStateName] = useState('');
  return (
    <View style={styles.container}>
      <Header
        title={'Add New Address'}
        leftIcon={require('../images/left-arrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <CustomTextInput
        placeholder={'Enter State Name'}
        value={stateName}
        onChangeText={text => {
          setStateName(text);
        }}
      />
      <CustomTextInput
        placeholder={'Enter City Name'}
        value={stateName}
        onChangeText={text => {
          setStateName(text);
        }}
      />
      <CustomTextInput
        placeholder={'Enter Street Name or Building'}
        value={stateName}
        onChangeText={text => {
          setStateName(text);
        }}
      />
      <View style={styles.officeAndHouseRadioContainer}>
        <Text>Office</Text>
        <Text>House</Text>
      </View>
      <CustomButton bg={'orange'} title={'Save'} color={'white'} />
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  officeAndHouseRadioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
});
