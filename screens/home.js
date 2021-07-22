import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: "Lorem Ipsum1", rating: 5, body: "Ok1", key: "1" },
        { title: "Lorem Ipsum2", rating: 4, body: "Ok2", key: "2" },
        { title: "Lorem Ipsum3", rating: 3, body: "Ok3", key: "3" },
        { title: "Lorem Ipsum4", rating: 2, body: "Ok4", key: "4" },

    ])
    const pressHandler = () => {
        // navigation.navigate("Details")
        navigation.push("Details");
    }
    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Card>
                        <Text styles={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    )
}

