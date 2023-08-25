import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import CountryListItem from "./app/components/CountryListItem";
import CountriesScreen from "./app/screens/CountriesScreen";
import CountryDetails from "./app/components/CountryDetails";
import CountryScreen from "./app/screens/CountryScreen";

const Stack = createNativeStackNavigator();

const CountryNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="AllCountries" component={CountriesScreen} />
    <Stack.Screen name="Country" component={CountryScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <CountryNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
