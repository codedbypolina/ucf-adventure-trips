import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NavigationContainer } from '@react-navigation/native';


import FontAwesome from "@expo/vector-icons/FontAwesome"

import HomeScreen from "../screens/HomeScreen"
import Saved from "../screens/SavedScreen"
import Categories from '../screens/CategoriesScreen'

const Tab = createBottomTabNavigator()

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

