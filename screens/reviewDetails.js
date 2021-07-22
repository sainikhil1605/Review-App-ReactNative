import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import Card from '../shared/card';
import image from "../assets/forgot.svg"
export default function ReviewDetails({ route, navigation }) {
    const pressHandler = () => {
        navigation.pop();
    }
    const { title, body, rating } = route.params;
    return (
        <Card>
            <View style={styles.container}>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View>
                    <Text>{rating}</Text>
                    <Image source={require("../assets/splash.png")} width={20} height={20} />
                </View>
            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
})
