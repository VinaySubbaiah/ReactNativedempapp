import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomerAddress from "./customerAddress";
import DeliveryAddress from "./deliveryAddress";
import Scan from "./Scan";
import DropDown from "./listView";
export default props => (
  <View style={styles.card}>
    <Text
      style={{
        fontSize: 20,
        height: 40,
        backgroundColor: "#00000",
        justifyContent: "center",
        paddingLeft: 90,
        fontSize: 30
      }}
    >
      1MONEY
    </Text>
    <Text
      style={{
        fontSize: 15,
        height: 30,
        backgroundColor: "#3C30DE",
        paddingLeft: 120,
        justifyContent: "center"
      }}
    >
      KYC
    </Text>

    <Text style={styles.text}>{props.children}</Text>
    <Scan />
    <CustomerAddress />
 
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    
  },
  text: {
    fontSize: 10,
    marginBottom: 10,
    color: "#4A4A4A"
  }
});
