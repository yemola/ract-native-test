import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";



const CountryListItem = ({ country, onPress }) => {


  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.emoji}>{country.emoji}</Text>
          <Text style={styles.name}>{country.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    flex: 1,
    margin: 6,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    width: "96%",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    paddingLeft: 7,
  },
  native: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  capital: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  emoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  currency: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  languages: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  languageList: {
    marginLeft: 16,
  },
  language: {
    fontSize: 14,
    color: "#444",
    marginBottom: 2,
  },
});

export default CountryListItem;
