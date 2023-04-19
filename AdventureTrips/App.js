import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text } from '@rneui/themed';
import { View, StyleSheet, TextInput, CheckBox, FlatList, Image } from 'react-native'
import Home from "./screens/HomeScreen"
import Categories from './screens/CategoriesScreen';
import Saved from './screens/SavedScreen';

import Navigation from './components/Navigation';



export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
