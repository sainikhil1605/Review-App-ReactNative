import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";
const { Navigator, Screen } = createStackNavigator();

export default AboutStack = () => (
    <Navigator headerMode="screen" screenOptions={{
        headerStyle: {
            backgroundColor: "coral",
            height: 100,
        },
        headerTintColor: "#444",
    }}>
        <Screen name="About" component={About} options={({ navigation }) => (
            { headerTitle: () => <Header navigation={navigation} title="About" /> }
        )} />
    </Navigator>
);

