// This is the screen that displays all of the information
// about an individual trip. This screen is accessed through
// clicking "Read more..."

import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';


export default function DescriptionScreen() {

    const route = useRoute();

    const item = route.params.item
    return (
        <ScrollView>
            <img src={item.image} />
            <View style={styles.main}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.information}>
                    <Text style={styles.text}>🗓 <span style={styles.bold}>Date:</span> {item.date}⁣</Text>
                    <Text style={styles.text}>📍 <span style={styles.bold}>Location:</span> {item.location}</Text>
                    <Text style={styles.text}>💵 <span style={styles.bold}>Trip Cost:</span> ${item.cost}</Text>
                    <Text style={styles.text}>📲 <span style={styles.bold}>Registration Opens:</span> {item.regOpen}</Text>
                    <Text style={styles.text}>🚫 <span style={styles.bold}>Registration Closes:</span> {item.regClosed}</Text>
                </View>
                <Text style={styles.h2}>Trip Description</Text>
                <Text style={styles.p}>{item.description}</Text>
                <Text style={styles.h2}>What’s included:</Text>
                <Text style={styles.p}>Lorem ipsum dolor sit amet consectetur. Ullamcorper dui posuere amet dictumst. Eleifend nisl nibh cras tristique congue in fringilla accumsan cursus. Ac nisi justo enim faucibus elit id non varius. Pellentesque dui proin molestie interdum mattis.</Text>
                <Text style={styles.p}>Trip Leaders: </Text>
            </View>
        </ScrollView>
    )
}

// styling
const styles = StyleSheet.create({

    main: {
        margin: 30
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },

    information: {
        backgroundColor: "#E6E5E8",
        paddingVertical: 20,
        paddingLeft: 25,
        paddingRight: 100,
        alignSelf: "center",
        borderRadius: 20
    },

    text: {
        marginVertical: 10,
        fontSize: 15
    },

    bold: {
        fontWeight: "bold"
    },

    h2: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 40,
        marginBottom: 20,
    },

    p: {
        fontSize: 16
    }
});