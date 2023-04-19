import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Alert, Image } from 'react-native'
//import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import homeLogo from "../images/home.png"

import FontAwesome from "@expo/vector-icons/FontAwesome"

import HomeScreen from "../screens/HomeScreen"
import Saved from "../screens/SavedScreen"
import Categories from '../screens/CategoriesScreen'
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator()
//const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    activeBackgroundColor: "#1E1E1E",
                    inactiveBackgroundColor: "#1E1E1E",
                    activeTintColor: "#FFCA00",
                    inactiveTintColor: "#FFCA00",
                    labelStyle: {
                        fontSize: 15
                    },

                }}
            >
                <Tab.Screen name="Home" component={HomeScreen}
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
        </NavigationContainer>
    )
}
export default Navigation;

/*
export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={{
                    showlabel: false,
                    style: {
                        backgroundColor: "black"

                    }
                }}
            >
                <Tab.Screen name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: () => (
                            <Image source={homeLogo} />
                        ),
                    }} />
                <Tab.Screen name="Categories" component={Categories} />
                <Tab.Screen name="Saved" component={Saved} />
            </Tab.Navigator>
        </NavigationContainer >
    )
}
*/