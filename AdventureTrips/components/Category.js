/*
Category component displays a list of categories
(taken from categoryData.js). Once clicked on the 
category, user is being navigated to Category screen 
that lists all trips under this category
*/

import { Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

// component accepts props in order to showcase appropriate information
export default function Category(props) {
    const category = props.category

    // navigation is used to navigate to a different screen
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.categories} onPress={() => navigation.navigate('Category', { category })}>
            <Text style={styles.emoji}>{category.emoji}</Text><Text style={styles.activity}> {category.activityName}</Text>
        </TouchableOpacity>
    )
}

// styling
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