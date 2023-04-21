import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Image, ScrollView } from 'react-native'
import Card from "../components/Card"
import data from "../data"

export default function Home({ navigation }) {
    const card = data.map(item => (<Card
        key={item.id}
        item={item}

    />))

    return (
        <View style={styles.screen}>



            <View style={styles.header}>
                <Text style={styles.h1}>Hi Polina!</Text>
                <Text style={styles.h1}>Explore Our Upcoming Trips</Text>

            </View>


            <Text style={styles.h2}>Categories</Text>
            <View>Categories Component</View>

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
    h1: {
        fontWeight: 700,
        fontSize: 23,

    },
    h2: {
        fontWeight: 500,
        fontSize: 20
    },
    screen: {
        backgroundColor: "#F1F1F1"
    },
    registration: {
        marginTop: 15,
        marginBottom: 15
    }
});