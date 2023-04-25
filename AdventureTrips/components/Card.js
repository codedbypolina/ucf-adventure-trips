/*
Card component is one of the most used
components in this project. It displays overview 
information about the trip, allowing the user to read
more about the trip or save it
*/

import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

// component accepts props in order to showcase appropriate information
export default function Card(props) {

    // navigation is used to navigate to a different screen
    const navigation = useNavigation();

    const item = props.item
    console.log(item)

    // useState and function to change the state of saved parameter
    const [isSaved, setIsSaved] = useState(item.saved);
    function toggleSave() {
        props.toggleSave(item.id);
        setIsSaved(!isSaved);
    }

    return (
        <View style={styles.card} >
            <View style={styles.info}>
                <img style={styles.image} src={item.image} width="320"></img>
                <View style={styles.description}>
                    <Text style={styles.infoTitle}>{item.title}</Text>
                    <Text style={styles.infoText}>🗓 {item.date}</Text>
                    <Text style={styles.infoText}>📍 {item.location}</Text>
                    <Text style={styles.infoText}>{item.emoji} {item.type}</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Description', { item })}>
                        <Text style={styles.buttonText}>
                            Read more...
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={toggleSave}>
                        <Text style={styles.buttonText}>
                            {isSaved ? 'Remove from saved' : 'Save trip'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

// styling
const styles = StyleSheet.create({

    image: {
        width: 230,
        height: 180,
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
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 15,
        marginVertical: 5,
        fontStyles: "italic",
    },
    buttons: {
        marginLeft: 15
    }
});