import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomButton from '../common/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToWishlist} from '../redux/slice/WishlistSlice';

import {
  addItemToCart,
  removeItemToCart,
  reduceItemToCart,
} from '../redux/slice/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AskForLoginModel from '../common/AskForLoginModel';

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectWish, setSelectWish] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const [isAddInCart, setIsAddInCart] = useState(false);
  const items = useSelector(state => state.cart);
  //async Storage function for check user logged in or not
  const checkUserStatus = async () => {
    const status = await AsyncStorage.getItem('IS_USER_LOGGED_IN');
    if (status == null) {
      setIsVisibleModal(true);
    } else {
      dispatch(addItemToCart(route.params.data));
      setIsAddInCart(true);
    }
  };
  //For login modal
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/left-arrow.png')}
        rightIcon={require('../images/shopping-cart.png')}
        title={'Product Detail'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <Image source={{uri: route.params.data.image}} style={styles.image} />
        <Text style={styles.title}>{route.params.data.title}</Text>
        <Text style={styles.description}>{route.params.data.description}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.price, {color: 'black'}]}>Price: </Text>
          <Text style={styles.price}> ${route.params.data.price}</Text>
        </View>
        <TouchableOpacity
          style={styles.wishBtn}
          onPress={() => {
            selectWish == 0 ? setSelectWish(1) : setSelectWish(0);
            dispatch(addItemToWishlist(route.params.data));
          }}>
          <Image
            source={
              selectWish == 1
                ? require('../images/heart-fill.png')
                : require('../images/heart-outline.png')
            }
            style={styles.wishBtnImg}
          />
        </TouchableOpacity>

        <View style={styles.button}>
          {isAddInCart == true ? (
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                checkUserStatus();
              }}>
              <Text style={styles.title}>Add in Cart</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.quantityView}>
              {quantity === 1 ? (
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    dispatch(addItemToCart(route.params.data));
                    setQuantity(quantity + 1); // Increment quantity when adding to cart
                  }}>
                  <Text style={styles.title}>Add to Cart</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    // dispatch(removeItemToCart(route.params.data));
                    // setQuantity(quantity - 1); // Decrement quantity when removing from cart
                  }}>
                  <Text style={styles.title}>Added to Cart</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </ScrollView>
      <AskForLoginModel
        isVisibleModal={isVisibleModal}
        onClickClose={() => setIsVisibleModal(false)}
        onClickLogin={() => {
          navigation.navigate('Login');
          setIsVisibleModal(false);
        }}
        onClickSignup={() => {
          navigation.navigate('Signup');
          setIsVisibleModal(false);
        }}
      />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 320,
    resizeMode: 'center',
    marginTop: 5,
  },
  title: {
    fontSize: 21,
    color: 'black',
    margin: 10,
  },
  description: {
    fontSize: 16,
    margin: 10,
  },
  price: {
    fontSize: 26,
    margin: 10,
    fontWeight: '600',
    color: 'green',
  },
  wishBtn: {
    position: 'absolute',
    backgroundColor: '#b9b9b9',
    width: 50,
    height: 50,
    borderRadius: 25,
    top: 180,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wishBtnImg: {
    width: 30,
    height: 30,
  },
  button: {
    width: '70%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d5d503',
  },
  quantityView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
  },
  quantityBtn: {
    borderWidth: 1,
    width: 25,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantitySign: {
    top: -6,
    fontWeight: 'bold',
  },
});
