import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  removeItemToCart,
  reduceItemToCart,
} from '../redux/slice/CartSlice';

const CheckOut = ({total}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const items = useSelector(state => state.cart);
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    setCartItem(items.data);
  }, [items]);
  return (
    <View style={styles.container}>
      <Header
        title={'CheckOut'}
        leftIcon={require('../images/left-arrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />

      <Text style={styles.addedItemsText}>Added Items</Text>
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
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.lineSperator} />
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>Total</Text>
        <Text style={styles.totalPriceText}>${route.params.total}</Text>
      </View>
      <Text style={styles.selectPaymentMethodTitle}>Select Payment Method</Text>
      <View style={styles.paymentMethodOptionContainer}>
        <TouchableOpacity style={styles.paymentMethodOption}>
          <Image
            source={require('../images/radio-outline.png')}
            style={styles.icon}
          />
          <Text style={styles.paymentMethodOptionText}>Cradit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentMethodOption}>
          <Image
            source={require('../images/radio-outline.png')}
            style={styles.icon}
          />
          <Text style={styles.paymentMethodOptionText}>Dabit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentMethodOption}>
          <Image
            source={require('../images/radio-outline.png')}
            style={styles.icon}
          />
          <Text style={styles.paymentMethodOptionText}>UPI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentMethodOption}>
          <Image
            source={require('../images/radio-outline.png')}
            style={styles.icon}
          />
          <Text style={styles.paymentMethodOptionText}>Cash on Delivery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  addedItemsText: {
    fontSize: 20,
    marginLeft: 30,
    marginVertical: 20,
    color: 'black',
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
  lineSperator: {
    height: 2,
    width: '95%',
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  totalPriceContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  totalPriceText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
  },
  selectPaymentMethodTitle: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 20,
    marginVertical: 30,
    fontWeight: '700',
  },
  paymentMethodOptionContainer: {
    marginHorizontal: 20,
  },
  paymentMethodOption: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '100%',
    backgroundColor: 'red',
    alignSelf: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  paymentMethodOptionText: {
    fontSize: 16,
    marginHorizontal: 15,
  },
});
