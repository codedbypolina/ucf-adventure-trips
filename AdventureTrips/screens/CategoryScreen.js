// This screen displays individual screen that displays
// all trips available in that category. This screen is
// available when user clicks on one of the categories 
// either in the home screen or categories screen

import { View, Text, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native';

// importing components and data
import data from "../data"
import Card from "../components/Card"

export default function Category() {

    const route = useRoute();
    const category = route.params.category

    // displaying each card
    const card = data.map(item => (<Card
        key={item.id}
        item={item}
    />))


    // function that displays appropriate cards that match with the category
    function activity() {
        for (let i = 0; i < 7; ++i) {
            //console.log(card[i].props.item.type)
            //console.log(category.activityName)
            if (card[i].props.item.type == category.activityName) {
                //console.log(card[i].props.item.title)
                //console.log("It is water activity")
                return card[i]
            }
        }
    }


    return (
        <View>
            <View style={styles.categories}>
                <Text style={styles.emoji}>{category.emoji}</Text><Text style={styles.activity}> {category.activityName}</Text>
            </View>
            <View>
                {activity()}

            </View>
        </View>
    )
}

// styling
const styles = StyleSheet.create({

    categories: {
        padding: 10,
        margin: 10,
        borderRadius: 12,
        display: "inline",
        textAlign: "center",
        justifyContent: "center",

    },

    emoji: {
        fontSize: 55,
        textAlignVertical: "center",
        marginRight: 15

    },

    activity: {
        fontSize: 24,
        textAlignVertical: "center",
        fontWeight: "bold"
    }

});
