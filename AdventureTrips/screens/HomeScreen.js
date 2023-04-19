import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Image } from 'react-native'
import homeLogo from "../images/home.png"


export default function Home({ navigation }) {
    return (
        <View style={styles.screen}>



            <View style={styles.header}>
                <Text style={styles.h1}>Hi Polina!</Text>
                <Text style={styles.h1}>Explore Our Upcoming Trips</Text>
                <Image source={require('../images/home.png')} />
            </View>


            <Text style={styles.h2}>Categories</Text>
            <View>Categories Component</View>

            <Text style={styles.h2}>Open Registration</Text>
            <View>Card Component</View>

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
    }
});