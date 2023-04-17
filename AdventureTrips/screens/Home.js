import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Alert } from 'react-native'


export default function Home() {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.h1}>Hi Polina!</Text>
                <Text style={styles.h1}>Explore Our Upcoming Trips</Text>
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
        flex: 1,
        alignItems: "center"
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