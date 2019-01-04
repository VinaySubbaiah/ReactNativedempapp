import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  YellowBox
} from "react-native";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
export default class ListView extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      "Warning: isMounted(...) is deprecated",
      "Module RCTImageLoader"
    ]);
  }
  render() {
    return (
      <MenuProvider style={{ flexDirection: "column", padding: 0 }}>
        <Menu onSelect={value => alert(`You Clicked : ${value}`)}>
          <MenuTrigger>
            <Text style={styles.headerText}>Select State</Text>
          </MenuTrigger>

          <MenuOptions>
            <MenuOption value={"Karnataka"}>
              <Text style={styles.menuContent}>Karnataka</Text>
            </MenuOption>
            <MenuOption value={"Kerala"}>
              <Text style={styles.menuContent}>Kerala</Text>
            </MenuOption>
            <MenuOption value={"Delhi"}>
              <Text style={styles.menuContent}>Delhi</Text>
            </MenuOption>
            <MenuOption value={"Telangana"}>
              <Text style={styles.menuContent}>Telangana</Text>
            </MenuOption>
            <MenuOption value={"Madyapradesha"}>
              <Text style={styles.menuContent}>Madyapradesha</Text>
            </MenuOption>
            <MenuOption value={"Andrapradesh"}>
              <Text style={styles.menuContent}>Andrapradesh</Text>
            </MenuOption>
            <MenuOption value={"Gao"}>
              <Text style={styles.menuContent}>Gao</Text>
            </MenuOption>
            <MenuOption value={3} disabled={true}>
              <Text style={styles.menuContent}>Disabled Menu</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </MenuProvider>
    );
  }
}
const styles = StyleSheet.create({
  headerText: {
    position: "absolute",
    fontSize: 12,
    margin: 0,
    fontWeight: "normal",
    alignSelf: "stretch",
    height: 30,
    marginBottom: 10,
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
