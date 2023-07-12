import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Header from '../common/Header';

const Search = () => {
  const navigation = useNavigation();
  const products = useSelector(state => state);
  //console.log(JSON.stringify(products.product.data));

  const [search, setSearch] = useState();
  const [oldData, setOldData] = useState(products.product.data);
  const [searchedList, setSearchedList] = useState(oldData);
  const filterData = text => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(text.toLowerCase());
    });
    setSearchedList(newData);
  };
  return (
    <View style={styles.container}>
      <Header title={'Sreach'} />
      <View style={styles.searchBar}>
        <TextInput
          value={search}
          placeholder="Search"
          style={styles.searchInput}
          onChangeText={text => {
            setSearch(text);
            filterData(text);
          }}
        />
        <TouchableOpacity>
          <Image
            source={require('../images/search-outline.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchedList}
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

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBar: {
    width: '90%',
    height: 60,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  searchInput: {
    fontSize: 20,
    height: 50,
    width: '80%',
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
