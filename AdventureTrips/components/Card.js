import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';



export default function Card(props) {
    const navigation = useNavigation();
    const item = props.item
    //console.log(props)
    //console.log(item.image)
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Description', { item })}>
            <View style={styles.info}>
                <img style={styles.image} src={item.image} width="320"></img>
                <View style={styles.description}>
                    <Text style={styles.infoTitle}>{item.title}</Text>
                    <Text style={styles.infoText}>🗓 {item.date}</Text>
                    <Text style={styles.infoText}>📍 {item.location}</Text>
                    <Text style={styles.infoText}>🏕 {item.type}</Text>
                </View>
            </View>
        </TouchableOpacity>
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