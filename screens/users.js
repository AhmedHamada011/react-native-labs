import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";

import UsersList from "../components/usersList";
import { useRoute } from "@react-navigation/native";
import routes from "../common/routes";

export default function UsersListScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const handleSearch = (text) => {
    setSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="search"
        onChangeText={(text) => handleSearch(text)}
      />
      <View style={styles.list}>
        <UsersList search={search}></UsersList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  list: {
    width: "100%",
    marginTop: 20,
  },
});
