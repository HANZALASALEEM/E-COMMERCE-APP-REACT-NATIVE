import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import Home from '../Tabs/Home';
import Search from '../Tabs/Search';
import Wishlist from '../Tabs/Wishlist';
import Notification from '../Tabs/Notification';
import Profile from '../Tabs/Profile';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* <Header
        leftIcon={require('../images/menu.png')}
        rightIcon={require('../images/shopping-cart.png')}
      /> */}
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Wishlist />
      ) : selectedTab == 3 ? (
        <Notification />
      ) : (
        <Profile />
      )}
      {!isKeyboardOpen && (
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.bottomTabs}
            onPress={() => {
              setSelectedTab(0);
            }}>
            <Image
              style={styles.tabIcon}
              source={
                selectedTab == 0
                  ? require('../images/home-fill.png')
                  : require('../images/home-outline.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTabs}
            onPress={() => {
              setSelectedTab(1);
            }}>
            <Image
              style={styles.tabIcon}
              source={
                selectedTab == 1
                  ? require('../images/search-fill.png')
                  : require('../images/search-outline.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTabs}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              style={styles.tabIcon}
              source={
                selectedTab == 2
                  ? require('../images/heart-fill.png')
                  : require('../images/heart-outline.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTabs}
            onPress={() => {
              setSelectedTab(3);
            }}>
            <Image
              style={styles.tabIcon}
              source={
                selectedTab == 3
                  ? require('../images/bell-fill.png')
                  : require('../images/bell-outline.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTabs}
            onPress={() => {
              setSelectedTab(4);
            }}>
            <Image
              style={styles.tabIcon}
              source={
                selectedTab == 4
                  ? require('../images/profile-fill.png')
                  : require('../images/profile-outline.png')
              }
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNav: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomTabs: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 25,
    height: 25,
  },
});
