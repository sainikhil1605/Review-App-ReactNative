import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from "expo-app-loading";
import Home from './screens/home';
import AppNavigator from "./routes/drawer";
import * as Font from 'expo-font'
export default function App() {
  const [fontsLoading, setFontsLoaded] = useState(false);
  const getFonts = () => Font.loadAsync({
    'nunito-regular': require("./assets/Nunito-Regular.ttf"),
    'nunito-bold': require('./assets/Nunito-Bold.ttf'),
  });

  if (fontsLoading === true) {
    return (
      <AppNavigator />
    );
  }
  else {
    return (
      <AppLoading startAsync={getFonts} onError={(err) => console.log(err)} onFinish={() => setFontsLoaded(true)} />
    );
  }
}


