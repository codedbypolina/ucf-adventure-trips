import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Image, ScrollView } from 'react-native'
import Card from "../components/Card"
import data from "../data"
import categories from "../categoryData"
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../components/Category';
import { useState } from "react";

// importing FontAwesome for Icons
import FontAwesome from "@expo/vector-icons/FontAwesome"



export default function Home({ navigation }) {


    const card = data.map(item => (<Card
        key={item.id}
        item={item}

    />))

    const savedCards = data.filter((trip) => trip.saved).map((trip) => <Card key={trip.id} item={trip} />);




    let [filter, setFilter] = useState("");



    const category = categories.map(category => (<Category
        category={category}

    />))
    const Stack = createStackNavigator();

    //console.log(card[0].props)
    //console.log(category)

    return (



        <ScrollView style={styles.screen}>




            <View style={styles.header}>
                <Text style={styles.h1}>Hi Polina!</Text>
                <Text style={styles.h1}>Explore Our Upcoming Trips</Text>
            </View>

            <View style={styles.input}>
                <FontAwesome name="search" size={25} color="#9b9b9b" />

                <TextInput
                    style={styles.search}
                    placeholder="Search for your next adventure..."
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                />
            </View>


            <Text style={styles.h2}>Categories</Text>
            <ScrollView horizontal={true} style={styles.categories}>{category}</ScrollView>

            <Text style={styles.h2}>Upcoming Trips</Text>
            <ScrollView horizontal={true} style={styles.registration}>{card}</ScrollView>

            <Text style={styles.h2}>Saved Trips</Text>
            <View>{savedCards}</View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    header: {
        marginBottom: 30,
        textAlign: "center"
    },
    categories: {
        marginVertical: 20

    },
    h1: {
        fontWeight: 700,
        fontSize: 23,

    },
    h2: {
        fontWeight: 500,
        fontSize: 20,
        marginTop: 10
    },
    screen: {

        backgroundColor: "#F1F1F1",
        marginHorizontal: 30,
        marginTop: 30
    },

    search: {
        color: "#9b9b9b",
        fontSize: 15,
        width: 300,
        marginLeft: 15,
        display: "inline",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        backgroundColor: "#E6E5E8",
        display: "inline",
        justifyContent: "center",
        padding: 15,
        borderRadius: 15,
        color: "#9b9b9b",
        fontSize: 15,
        marginVertical: 10,
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