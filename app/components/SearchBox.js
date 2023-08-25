import React, { FC } from "react";
import { Keyboard, TextInput, View, StyleSheet } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

const SearchBox = ({ searchPhrase, setSearchPhrase }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <MaterialCommunityIcons
          name="text-search"
          size={16}
          color={defaultStyles.colors.light}
          style={styles.icon}
        />
        <TextInput
          placeholderTextColor="gray"
          style={defaultStyles.text}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search..."
          onChangeText={setSearchPhrase}
          value={searchPhrase}
        />
      </View>
      {searchPhrase !== "" && (
        <Entypo
          style={styles.clearIcon}
          name="cross"
          size={20}
          color={defaultStyles.colors.light}
          onPress={() => {
            setSearchPhrase("");
            Keyboard.dismiss();
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6,
    marginVertical: 10,
    marginHorizontal: 9,
  },
  icon: {
    marginLeft: 3,
    marginRight: 10,
    marginTop: 4,
  },
  clearIcon: {
    marginRight: 5,
  },
  wrap: {
    flexDirection: "row",
  },
});

export default SearchBox;
