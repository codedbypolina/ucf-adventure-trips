// This is the main screen. It displays search bar (that unfortunately
// doesn't work), list of categories, upcoming trips and saved trips

import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Image, ScrollView } from 'react-native'
import { useState } from "react";


// importing data sets
import data from "../data"
import categories from "../categoryData"

// importing components
import Category from '../components/Category';
import Card from "../components/Card"

// importing FontAwesome for Icons
import FontAwesome from "@expo/vector-icons/FontAwesome"



export default function Home() {

    // Creating useState to manipulate data
    const [dataset, setData] = useState(data);

    // toggleSave function changes saved parameter in data file from true to false and vice versa
    function toggleSave(id) {
        const newData = dataset.map((item) => {
            if (item.id === id) {
                return { ...item, saved: !item.saved };
            }
            return item;
        });
        setData(newData);
    }

    // displaying each card
    const card = dataset.map((item) => (
        <Card key={item.id} item={item} toggleSave={toggleSave} />
    ));


    // displaying each card that has true value in saved parameter
    const savedCards = data.filter((trip) => trip.saved).map((trip) => <Card key={trip.id} item={trip} toggleSave={toggleSave} />);

    // my attempt in creating search box
    let [filter, setFilter] = useState("");

    // displaying each category from Category component
    const category = categories.map(category => (<Category
        category={category}

    />))


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
            <ScrollView horizontal={true}>{savedCards}</ScrollView>
        </ScrollView>
    )
}

// styling
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