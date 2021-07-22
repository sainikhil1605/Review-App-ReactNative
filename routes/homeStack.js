import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
const { Navigator, Screen } = createStackNavigator();
import Header from "../shared/header";
export default HomeStack = () => {
    return (
        <Navigator headerMode="screen" screenOptions={{
            headerStyle: {
                backgroundColor: "coral",
                height: 100,
            },
            headerTintColor: "#444",
        }}>
            <Screen name="Home" component={Home} options={({ navigation }) => (
                { headerTitle: () => <Header navigation={navigation} title="GameZone" /> }
            )} />
            <Screen name="Details" component={ReviewDetails} options={{
                title: "Review Details",
            }} />
        </Navigator>
    );
}

