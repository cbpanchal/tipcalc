import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hello: {
    backgroundColor: "#00ff00",
    fontSize: 35
  }
});

const Hello = () => (
  <View>
    <Text style={styles.hello}>Hello ios</Text>
  </View>
);

export default Hello;
