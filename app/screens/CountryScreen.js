import React from "react";
import { View } from "react-native";

import CountryDetails from "../components/CountryDetails";
import Screen from "../components/Screen";

function CountryScreen({ route, navigation }) {
  const { item: country } = route.params;

  return (
    <Screen>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <CountryDetails country={country} onClose={() => navigation.goBack()} />
      </View>
    </Screen>
  );
}

export default CountryScreen;
