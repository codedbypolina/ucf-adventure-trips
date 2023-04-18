import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Alert } from 'react-native'
//import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreen"
import Saved from "../screens/SavedScreen"
import Categories from '../screens/CategoriesScreen'

const Stack = createBottomTabNavigator()
//const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Categories" component={Categories} />
                <Stack.Screen name="Saved" component={Saved} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}