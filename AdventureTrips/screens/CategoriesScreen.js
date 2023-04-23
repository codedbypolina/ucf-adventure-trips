import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Alert } from 'react-native'
import Category from "../components/Category"
import categories from "../categoryData"


export default function Categories({ navigation }) {
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