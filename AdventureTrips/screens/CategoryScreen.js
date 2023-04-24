import { View, Text, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native';
import data from "../data"
import Card from "../components/Card"

export default function Category({ navigation }) {

    const route = useRoute();
    console.log(route)
    console.log(route.params)

    const category = route.params.category

    const card = data.map(item => (<Card
        key={item.id}
        item={item}
    />))


    //console.log(card[0].props.item.type)
    function activity() {
        for (let i = 0; i < 3; ++i) {
            console.log(card[i].props.item.type)
            console.log(category.activityName)
            if (card[i].props.item.type == category.activityName) {
                console.log(card[i].props.item.title)
                console.log("It is water activity")
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
