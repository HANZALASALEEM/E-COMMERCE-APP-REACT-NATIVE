import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {addProducts} from '../redux/slice/ProductSlice';
const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        json.map(item => {
          item.quantity = 1;
        });
        dispatch(addProducts(json));
      });
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/menu.png')}
        rightIcon={require('../images/shopping-cart.png')}
        title={'E STORE'}
        onClickLeftIcon={() => navigation.openDrawer()}
      />
      <FlatList
        data={products}
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
                <Text style={styles.itemPrice}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
