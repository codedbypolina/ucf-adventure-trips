import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Image, ScrollView } from 'react-native'
import Card from "../components/Card"
import data from "../data"
import { createStackNavigator } from '@react-navigation/stack';
import DescriptionScreen from './DescriptionScreen';
import Navigation from '../components/Navigation';


export default function Home({ navigation }) {
    const card = data.map(item => (<Card
        key={item.id}
        item={item}

    />))
    const Stack = createStackNavigator();

    console.log(card[0].props)

    return (



        <View style={styles.screen}>




            <View style={styles.header}>
                <Text style={styles.h1}>Hi Polina!</Text>
                <Text style={styles.h1}>Explore Our Upcoming Trips</Text>

            </View>


            <Text style={styles.h2}>Categories</Text>
            <View style={styles.categories}> <Text style={styles.emoji}>🚣‍♀️</Text> <Text style={styles.activity}>Water Activities</Text></View>

            <Text style={styles.h2}>Open Registration</Text>
            <ScrollView horizontal={true} style={styles.registration}>{card}</ScrollView>

            <Text style={styles.h2}>Upcoming Trips</Text>
            <View>Card Component</View>
        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        marginBottom: 30,
        textAlign: "center"
    },
    categories: {
        backgroundColor: "#E6E5E8",
        width: "fit-content",
        padding: 10,
        margin: 10,
        borderRadius: 12,
        display: "inline",

    },
    h1: {
        fontWeight: 700,
        fontSize: 23,

    },
    h2: {
        fontWeight: 500,
        fontSize: 20
    },
    screen: {

        backgroundColor: "#F1F1F1",
        marginLeft: 30,
        marginTop: 30
    },
    registration: {
        marginTop: 15,
        marginBottom: 15
    },
    emoji: {
        fontSize: 30,
        marginRight: 13
    },
});