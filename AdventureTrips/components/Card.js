import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Image } from 'react-native'
import caving from "../images/caving.png"

export default function Card(props) {
    return (
        <View style={styles.card} >
            <View style={styles.info}>
                <img src={caving} style={styles.image} />
                <View style={styles.description}>
                    <Text style={styles.infoTitle}>Caving and Camping</Text>
                    <Text style={styles.infoText}>🗓 6/14/23-6/16/23</Text>
                    <Text style={styles.infoText}>📍 Tumbling Rock Cave, AL</Text>
                    <Text style={styles.infoText}>🏕 Overnight Trip</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    image: {
        width: 230,
        borderRadius: 5,

    },
    info: {
        backgroundColor: "#FFCA00",
        paddingBottom: 40,
        alignSelf: 'flex-start',
        fontSize: 30,
        borderRadius: 10,
        margin: 15

    },
    infoText: {
        fontSize: 15,
        margin: 5,
    },
    infoTitle: {
        fontSize: 15,
        margin: 5,
        fontWeight: "bold"
    },
    description: {
        marginLeft: 5,
        marginTop: 10
    }
});