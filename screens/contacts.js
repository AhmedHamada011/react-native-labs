import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SectionList,
  Image,
} from "react-native";
import styles from "../styles";
const Contact = () => {
  const sections = [
    {
      id: "0",
      title: "A",
      data: [
        { id: "0", text: "User1", img: require("../assets/user.png") },
        { id: "1", text: "User2", img: require("../assets/avatar1.png") },
        { id: "2", text: "User3", img: require("../assets/avatar2.png") },
      ],
    },
    {
      id: "1",
      title: "B",
      data: [
        { id: "3", text: "User1", img: require("../assets/avatar1.png") },
        { id: "4", text: "User2", img: require("../assets/avatar2.png") },
      ],
    },
    {
      id: "2",
      title: "C",
      data: [
        { id: "5", text: "User1", img: require("../assets/avatar2.png") },
        { id: "6", text: "User2", img: require("../assets/avatar3.png") },
      ],
    },
    {
      id: "3",
      title: "D",
      data: [
        { id: "7", text: "User1", img: require("../assets/avatar2.png") },
        { id: "8", text: "User2", img: require("../assets/avatar3.png") },
        { id: "9", text: "User3", img: require("../assets/user.png") },
      ],
    },
  ];

  return (
    <View>
      <SectionList
        sections={sections}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        renderItem={({ item: { text, img } }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              paddingVertical: 6,
              paddingHorizontal: 6,
            }}
          >
            <Image
              source={img}
              style={{
                width: 32,
                height: 32,
                borderRadius: 50,
              }}
            />
            <Text style={[styles.itemStyle, { flexGrow: 2 }]}>{text}</Text>
          </View>
        )}
        keyExtractor={(props) => props.id}
        // horizontal
      ></SectionList>
    </View>
  );
};

export default Contact;
