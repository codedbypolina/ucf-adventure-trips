/*
For this project I decided to use Option #2: 
Create a new React Native project with three (3) NEW components and at least 3 screens in an independent repository.
The THREE components should be used at least TWICE (2 times) across the application with different parameters or route data
(e.g. parameters, route params, etc). At least one state should be manipulated in a component (no static text or images or elements).
Each component must also contain some user interface element that changes the state in some way.

Link to GitHub: https://github.com/codedbypolina/ucf-adventure-trips
Link to Portfolio to view app: https://www.codedbypolina.com/
*/


/* App.js is mostly used for navigation. I needed to nest navigation
inside of another navigation in order to have bottom nav
and navigate from one screen to another
*/
import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native'

// Importing components/functions for navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

// importing FontAwesome for Icons
import FontAwesome from "@expo/vector-icons/FontAwesome"

// importing screens
import Home from "./screens/HomeScreen"
import Categories from './screens/CategoriesScreen';
import Category from "./screens/CategoryScreen";
import Saved from './screens/SavedScreen';
import DescriptionScreen from './screens/DescriptionScreen';

// Main Navigation
function MainStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Description" component={DescriptionScreen} />
      <Stack.Screen name="Category" component={Category} />

    </Stack.Navigator>
  );
}

// Bottom Navigation
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: "#1E1E1E",
        inactiveBackgroundColor: "#1E1E1E",
        activeTintColor: "#FFCA00",
        inactiveTintColor: "#FFCA00",
        labelStyle: {
          fontSize: 15
        }
      }}>
      <Tab.Screen name="Home" component={MainStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name="home" size={25} color="#FFCA00" style={{ alignSelf: "center" }} />
              <Text style={{ color: "#FFCA00", textDecoration: focused ? "underline" : "none" }}>Home</Text>
            </View>
          )
        }} />
      <Tab.Screen name="Categories" component={Categories} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <FontAwesome name="align-justify" size={25} color="#FFCA00" style={{ alignSelf: "center" }} />
            <Text style={{ color: "#FFCA00", textDecoration: focused ? "underline" : "none" }}>Categories</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Saved" component={Saved} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <FontAwesome name="heart" size={25} color="#FFCA00" style={{ alignSelf: "center" }} />
            <Text style={{ color: "#FFCA00", textDecoration: focused ? "underline" : "none" }}>Saved</Text>
          </View>
        )
      }} />
    </Tab.Navigator>
  );
}

// App function
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  },
});
