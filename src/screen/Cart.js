import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../common/Header';
import {
  addItemToCart,
  removeItemToCart,
  reduceItemToCart,
} from '../redux/slice/CartSlice';
import CheckOutLayout from '../common/CheckOutLayout';

const Cart = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const items = useSelector(state => state.cart);
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    setCartItem(items.data);
    console.log(cartItem);
  }, [items]);

  const getTotal = () => {
    let total = 0;
    cartItem.map(item => {
      total = total + item.quantity * item.price;
    });
    return total;
  };
  return (
    <View style={styles.container}>
      <Header
        title={'Cart Items'}
        leftIcon={require('../images/left-arrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <FlatList
        data={cartItem}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.productList}
              onPress={() => {
                navigation.navigate('ProductDetail', {data: item});
              }}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View>
                <Text style={styles.itemTitle}>
                  {item.title.length > 20
                    ? item.title.substring(0, 20) + '...'
                    : item.title}
                </Text>
                <Text style={styles.itemDescription}>
                  {item.description.length > 40
                    ? item.description.substring(0, 40) + '...'
                    : item.description}
                </Text>
                <View style={styles.quantityView}>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                  <TouchableOpacity
                    style={styles.quantityBtn}
                    onPress={() => {
                      if (item.quantity > 1) {
                        dispatch(reduceItemToCart(item));
                      } else {
                        dispatch(removeItemToCart(index));
                      }
                    }}>
                    <Text style={[styles.quantitySign, {fontSize: 25}]}>-</Text>
                  </TouchableOpacity>
                  <Text>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityBtn}
                    onPress={() => {
                      dispatch(addItemToCart(item));
                    }}>
                    <Text style={[styles.quantitySign, {fontSize: 25}]}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {cartItem.length < 1 && (
        <View style={styles.noItem}>
          <Text>No items in Cart</Text>
        </View>
      )}
      {cartItem.length > 0 && (
        <CheckOutLayout
          items={cartItem.length}
          total={getTotal()}
          data={cartItem}
        />
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  productList: {
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: 'white',
    margin: 10,
    flexDirection: 'row',
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 6,
  },
  itemTitle: {
    fontSize: 20,
    color: 'black',
    marginBottom: 5,
    fontWeight: 600,
  },
  itemDescription: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 20,
    color: '#1b9110',
  },
  quantityView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  noItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
