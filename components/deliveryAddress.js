import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
export default class deliveryAddress extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Delivery Address</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Door/flat/bdg/company name & No."
          placeholderTextColor="#9A99A2"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Road/Street name"
          placeholderTextColor="#9A99A2"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Landmark/Area"
          placeholderTextColor="#9A99A2"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Town/city"
          placeholderTextColor="#9A99A2"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Select State"
          placeholderTextColor="#9A99A2"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Pincode"
          placeholderTextColor="#9A99A2"
          underlineColorAndroid={"transparent"}
        />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  header: {
    position: "relative",
    fontSize: 15,
    color: "#39383C",
    paddingLeft: 100,
    height: 30,
    fontWeight: "bold"
  },
  textInput: {
    alignSelf: "stretch",
    height: 30,
    marginBottom: 5,
    color: "#39383C",
    borderBottomColor: "#2A2A2F",
    borderBottomWidth: 0.5
  },
  headerText: {
    fontSize: 12,
    margin: 0,
    fontWeight: "normal",
    alignSelf: "stretch",
    height: 30,
    marginBottom: 5,
    color: "#39383C",
    borderBottomColor: "#2A2A2F",
    borderBottomWidth: 1,
    fontWeight: "100"
  },
  menuContent: {
    color: "#000",
    fontWeight: "normal",
    padding: 0,
    fontSize: 13
  }
});
