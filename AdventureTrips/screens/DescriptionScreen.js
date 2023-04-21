import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function DescriptionScreen({ route }) {
    return (
        <ScrollView>
            <img src="https://iili.io/HvDgFiF.md.png" />
            <View style={styles.main}>
                <Text style={styles.title}>Caving and Camping</Text>
                <View style={styles.information}>
                    <Text style={styles.text}>🗓 <span style={styles.bold}>Date:</span> 6/14/23-6/16/23⁣</Text>
                    <Text style={styles.text}>📍 <span style={styles.bold}>Location:</span> Tumbling Rock Cave, AL</Text>
                    <Text style={styles.text}>💵 <span style={styles.bold}>Trip Cost:</span> $50</Text>
                    <Text style={styles.text}>📲 <span style={styles.bold}>Registration Opens:</span> 6/1/23, 12PM</Text>
                    <Text style={styles.text}>🚫 <span style={styles.bold}>Registration Closes:</span> 6/2/23, 5PM</Text>
                </View>
                <Text style={styles.h2}>Trip Description</Text>
                <Text style={styles.p}>Lorem ipsum dolor sit amet consectetur. Ullamcorper dui posuere amet dictumst. Eleifend nisl nibh cras tristique congue in fringilla accumsan cursus. Ac nisi justo enim faucibus elit id non varius. Pellentesque dui proin molestie interdum mattis.</Text>
                <Text style={styles.h2}>What’s included:</Text>
                <Text style={styles.p}>Lorem ipsum dolor sit amet consectetur. Ullamcorper dui posuere amet dictumst. Eleifend nisl nibh cras tristique congue in fringilla accumsan cursus. Ac nisi justo enim faucibus elit id non varius. Pellentesque dui proin molestie interdum mattis.</Text>
                <Text style={styles.p}>Trip Leaders: </Text>
            </View>
        </ScrollView>
    )
}


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