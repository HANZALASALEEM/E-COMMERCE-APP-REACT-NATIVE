import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const CheckOutLayout = ({total, items, data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.partition}>
        <Text>(Items: {items})</Text>
        <Text style={styles.price}>
          Total Price: ${isNaN(total) ? 'issue founded' : total.toFixed(2)}
        </Text>
      </View>
      <View style={[styles.partition, {justifyContent: 'center'}]}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => {
            navigation.navigate('CheckOut', {total: total});
          }}>
          <Text style={styles.checkoutButtonText}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOutLayout;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    backgroundColor: '#ffffff',
    width: '100%',
    flexDirection: 'row',
  },
  partition: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutButton: {
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#ff8605',
    width: '90%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
  },
  price: {
    fontWeight: '800',
    fontSize: 16,
  },
});
