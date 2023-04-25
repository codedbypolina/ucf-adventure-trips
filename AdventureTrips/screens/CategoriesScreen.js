// This screen simply displays a list of available categories
// It is the screen the user is navigated to when clicks
// on categores tab at the bottom of the app

import { View, Text, StyleSheet } from 'react-native'

// importing components and data
import Category from "../components/Category"
import categories from "../categoryData"


// displaying all categories from categoryData
export default function Categories() {
    const category = categories.map(category => (<Category
        category={category}

    />))
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.h1}>Categories</Text>
                {category}
            </View>
        </View>
    )
}

// styling
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