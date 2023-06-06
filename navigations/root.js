import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { createContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import routes from "../common/routes";
import axios from "axios";
import Contact from "../screens/contacts";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Users from "../screens/users";
import Todo from "../screens/todo";
import UsersNavigator from "./usersNavigation";
export const usersContext = createContext();
const Root = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => setUsers(res.data));
  //   // fetch("https://jsonplaceholder.typicode.com/users")
  //   // .then(res=>res.json()).then(data=>setUsers(data))
  // }, []);

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator style={styles.container}>
      <Tab.Screen name={routes.contacts} component={Contact} />
      <Tab.Screen name="users" component={UsersNavigator} />
      <Tab.Screen name={routes.todo} component={Todo} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
  },
});

export default Root;
