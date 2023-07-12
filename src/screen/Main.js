import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
const Drawer = createDrawerNavigator();
const Main = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
