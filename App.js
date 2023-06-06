import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigations/root";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import routes from "./common/routes";
import Contact from "./screens/contacts";
import Users from "./screens/users";

export default function App() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Root></Root>
    </NavigationContainer>
  );
}
