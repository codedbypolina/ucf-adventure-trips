// This screen displays all of the trips that have been saved. 
// While "Save trip" button does turn saved parameter in data.js to true,
// it still doesn't display the trip into the saved screen :(


import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Alert } from 'react-native'
import data from "../data"
import Card from "../components/Card"
import { useState } from "react";
import { ScrollView } from 'react-native-gesture-handler';



export default function Saved({ navigation }) {
    const [dataset, setData] = useState(data);

    // function that changes saved parameter in data file from true to false and vice versa
    function toggleSave(id) {
        const newData = dataset.map((item) => {
            if (item.id === id) {
                return { ...item, saved: !item.saved };
            }
            return item;
        });
        setData(newData);
    }

    // displaying all cards that have been saved
    const savedCards = data.filter((trip) => trip.saved).map((trip) => <Card key={trip.id} item={trip} toggleSave={toggleSave} />);

    return (
        <View>
            <View style={styles.header}> <Text style={styles.h1}>Saved Trips</Text></View>
            <ScrollView horizontal={true}>{savedCards}</ScrollView>
        </View>
    )
}

// styling
const styles = StyleSheet.create({

    header: {
        marginBottom: 30,
        textAlign: "center",
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    h1: {
        fontWeight: 700,
        fontSize: 23,
        marginVertical: 35

    }
});