import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack'
import AboutStack from './aboutStack';

const { Navigator, Screen } = createDrawerNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Navigator >
                <Screen name="Home" component={HomeStack} />
                <Screen name="About" component={AboutStack} />
            </Navigator>
        </NavigationContainer>
    );
}