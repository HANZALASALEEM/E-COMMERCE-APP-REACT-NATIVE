import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';

const AskForLoginModel = ({
  isVisibleModal,
  onClickLogin,
  onClickSignup,
  onClickClose,
}) => {
  const navigation = useNavigation();
  return (
    <Modal visible={isVisibleModal} transparent>
      <View style={styles.mainView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.closeBtnView}
            onPress={() => onClickClose()}>
            <Image
              source={require('../images/close.png')}
              style={styles.closeBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, {marginTop: 35}]}
            onPress={() => onClickLogin()}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, {marginTop: 35}]}
            onPress={() => onClickSignup()}>
            <Text style={styles.btnText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AskForLoginModel;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    height: 200,
    width: '90%',
    borderRadius: 20,
  },
  btn: {
    backgroundColor: '#d5d503',
    height: 50,
    width: '90%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  btnText: {
    fontSize: 22,
    color: 'black',
  },
  closeBtn: {
    width: 20,
    height: 20,
  },
  closeBtnView: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
});
