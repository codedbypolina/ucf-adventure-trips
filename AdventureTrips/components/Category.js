import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

export default function Category(props) {
    const category = props.category
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.categories} onPress={() => navigation.navigate('Category')}>
            <Text style={styles.emoji}>{category.emoji}</Text><Text style={styles.activity}> {category.activityName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    categories: {
        backgroundColor: "#E6E5E8",
        width: 200,
        padding: 10,
        margin: 10,
        borderRadius: 12,
        display: "inline",
        textAlign: "center",
        justifyContent: "center",

    },

    emoji: {
        fontSize: 25,
        textAlignVertical: "center"

    },

    activity: {
        fontSize: 16,
        textAlignVertical: "center"
    }

});