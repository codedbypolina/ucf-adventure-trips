import { View, Text, StyleSheet, TextInput, CheckBox, FlatList, Image, ScrollView } from 'react-native'
import Card from "../components/Card"
import data from "../data"
import categories from "../categoryData"
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../components/Category';


export default function Home({ navigation }) {
    const card = data.map(item => (<Card
        key={item.id}
        item={item}

    />))

    const category = categories.map(category => (<Category
        category={category}

    />))
    const Stack = createStackNavigator();

    //console.log(card[0].props)
    //console.log(category)

    return (



        <View style={styles.screen}>




            <View style={styles.header}>
                <Text style={styles.h1}>Hi Polina!</Text>
                <Text style={styles.h1}>Explore Our Upcoming Trips</Text>

            </View>


            <Text style={styles.h2}>Categories</Text>
            <ScrollView horizontal={true} style={styles.categories}>{category}</ScrollView>

            <Text style={styles.h2}>Upcoming Trips</Text>
            <ScrollView horizontal={true} style={styles.registration}>{card}</ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        marginBottom: 30,
        textAlign: "center"
    },
    categories: {
        marginVertical: 20

    },
    h1: {
        fontWeight: 700,
        fontSize: 23,

    },
    h2: {
        fontWeight: 500,
        fontSize: 20,
        marginTop: 10
    },
    screen: {

        backgroundColor: "#F1F1F1",
        marginLeft: 30,
        marginTop: 30
    },
    registration: {
        marginTop: 15,
        marginBottom: 15
    },
    emoji: {
        fontSize: 30,
        marginRight: 13
    },
});