import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text } from '@rneui/themed';
import { View, StyleSheet, TextInput, CheckBox, FlatList, Alert } from 'react-native'
import Home from "./screens/Home"


export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
