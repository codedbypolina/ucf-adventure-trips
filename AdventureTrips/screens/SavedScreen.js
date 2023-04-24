import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Alert } from 'react-native'
import data from "../data"
import Card from "../components/Card"


export default function Saved({ navigation }) {
    const savedCards = data.filter((trip) => trip.saved).map((trip) => <Card key={trip.id} item={trip} />);

    return (
        <View >
            <View style={styles.header}> <Text style={styles.h1}>Saved Trips</Text></View>
            {savedCards}
        </View>
    )
}

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