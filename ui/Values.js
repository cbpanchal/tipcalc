import React from "react";
import PropTypes from "prop-types";

import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  values: {
    backgroundColor: "#484848",
    alignItems: "center",
    width: "100%",
    padding: 20
  },
  label: {
    color: "#FFF"
  },
  tip: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#FFF"
  },
  total: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF"
  }
});

const Values = props => {
  const { tipPercent, bill } = props;
  let tip = 0.0;
  let total = 0.0;
  if (bill) {
    tip = parseFloat(bill) * tipPercent;
    total = parseFloat(bill) + tip;
    tip = (Math.round(tip * 100) / 100).toFixed(2);
    total = (Math.round(total * 100) / 100).toFixed(2);
  }
  return (
    <View style={styles.values}>
      <Text style={styles.label}>Tip amount</Text>
      <Text style={styles.tip}>${tip}</Text>
      <Text style={styles.label}>Total bill</Text>
      <Text style={styles.total}>${total}</Text>
    </View>
  );
};

Values.propTypes = {
  tipPercent: PropTypes.number,
  bill: PropTypes.string
};

Values.defaultProps = {
  tipPercent: 0.0,
  bill: ""
};

export default Values;
