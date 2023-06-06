import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import routes from "../common/routes";
import Details from "../screens/details";
import UsersListScreen from "../screens/users";
const UsersNavigator = () => {
  const stack = createNativeStackNavigator();

  return (
    <stack.Navigator>
      <stack.Screen name={routes.users} component={UsersListScreen} />
      <stack.Screen name={routes.details} component={Details} />
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
  },
});

export default UsersNavigator;
