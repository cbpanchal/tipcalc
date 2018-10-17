import Expo from "expo";
import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

import { Container, Content } from "native-base";
import Head from "./ui/Head";
import Values from "./ui/Values";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  input: {
    height: 40,
    width: "100%",
    padding: 5,
    color: "#FFF"
  },
  inputs: {
    backgroundColor: "#212121",
    padding: 20
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  customTip: {
    height: 40,
    width: 60,
    padding: 5,
    color: "#FFF"
  }
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      tip: 0.2,
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  updateCustomTip(customTip) {
    if (customTip) {
      this.setState({
        tip: parseFloat(customTip) / 100
      });
    } else {
      this.setState({ tip: 0 });
    }
  }

  render() {
    const { isReady, tip, inputValue } = this.state;
    if (!isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        <Head />
        <View style={styles.container}>
          <Content style={{ width: "100%" }}>
            <Values tipPercent={tip} bill={inputValue} />
            <View style={styles.inputs}>
              <TextInput
                value={inputValue}
                style={styles.input}
                keyboardType="numeric"
                placeholder="0.00"
                underlineColorAndroid="#FFF"
                placeholderTextColor="#FFF"
                onChangeText={text =>
                  this.setState({
                    inputValue: text
                  })
                }
              />
              <View style={styles.buttonGroup}>
                <Button
                  title="10%"
                  onPress={() => this.setState({ tip: 0.1 })}
                />
                <Button
                  title="20%"
                  onPress={() => this.setState({ tip: 0.2 })}
                />
                <Button
                  title="25%"
                  onPress={() => this.setState({ tip: 0.25 })}
                />
                <TextInput
                  style={styles.customTip}
                  value={(tip * 100).toString()}
                  keyboardType="numeric"
                  placeholder="20%"
                  underlineColorAndroid="#FFF"
                  placeholderTextColor="#FFF"
                  onChangeText={customTip => {
                    this.updateCustomTip(customTip);
                  }}
                />
              </View>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}
