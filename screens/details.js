import { useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { usersContext } from "../navigations/root";

const Details = () => {
  const { params } = useRoute();
  // console.warn(params);
  const [user, setUser] = useState(null);

  return (
    <View style={styles.container}>
      {params && <Text style={styles.textStyle}>Name: {params.name}</Text>}
      {params && (
        <Text style={styles.textStyle}>Username: {params.username}</Text>
      )}
      {params && <Text style={styles.textStyle}>Email: {params.email}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    fontSize: 50,
    textAlign: "center",
  },
  textStyle: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
});

export default Details;
