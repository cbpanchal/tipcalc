import React from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";

import { Header, Left, Right, Body, Title } from "native-base";

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});

const Head = () => (
  <View style={styles.header}>
    <Header>
      <Left />
      <Body>
        <Title>Header</Title>
      </Body>
      <Right />
    </Header>
  </View>
);

export default Head;
