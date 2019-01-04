import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  YellowBox,
  KeyboardAvoidingView
} from "react-native";
import MultiSelect from "react-native-multiple-select";

export default class customerAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      companyName: "",
      nameValidat: true,
      pincode: "",
      Street: "",
      LandMark: "",
      city: "",
      State: ""
    };
  }
  validateCompany(text, type) {
    alpha = /^[a-zA-Z]+$/;
    if (type == "companyName") {
      if (alpha.test(text)) {
        console.warn("Valid");
      } else {
        console.warn("Invalid");
      }
    }
  }
  validateStreet(text, type) {
    alpha = /^[a-zA-Z]+$/;
    if (type == "street") {
      if (alpha.test(text)) {
        console.warn("Valid");
      } else {
        console.warn("Invalid Street..!!");
      }
    }
  }
  validateLandMark(text, type) {
    alpha = /^[a-zA-Z]+$/;
    if (type == "landMark") {
      if (alpha.test(text)) {
        console.warn("Valid");
      } else {
        console.warn("Invalid landmark.!!");
      }
    }
  }
  validateCity(text, type) {
    alpha = /^[a-zA-Z]+$/;
    if (type == "city") {
      if (alpha.test(text)) {
        console.warn("Valid");
      } else {
        console.warn("Invalid city...!!");
      }
    }
  }
  validateState(text, type) {
    alpha = /^[a-zA-Z]+$/;
    if (type == "state") {
      if (alpha.test(text)) {
        console.warn("Valid");
      } else {
        console.warn("Invalid State...!!");
      }
    }
  }
  validatePinCode(text, type) {
    alpha = /^[a-zA-Z]+$/;
    if (type == "pincode") {
      if (!alpha.test(text)) {
        console.warn("Valid");
      } else {
        alert("Invalid pincode-!!");
      }
    }
  }
  validateStreet
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
  render() {
    this.items = [
      {
        id: "92iijs7yta",
        name: "Karnataka"
      },
      {
        id: "a0s0a8ssbsd",
        name: "Andrapradesh"
      },
      {
        id: "sdhyaysdj",
        name: "Gao"
      },
      {
        id: "suudydjsjd",
        name: "Thamilnaadu"
      }
    ];
    return (
      <View>
        {/* <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        > */}
        <Text
          style={{
            fontSize: 15,
            color: "#39383C",
            paddingLeft: 90,
            height: 30,
            fontWeight: "bold"
          }}
        >
          Customer Address
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.validateCompany(text, "companyName")}
          placeholder="Door/flat/bdg/company name & No."
          placeholderTextColor="#9A99A2"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.textInput}
          onChangeText={text => this.validateStreet(text, "street")}
          placeholder="Road/Street name"
          placeholderTextColor="#9A99A2"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Landmark/Area"
          onChangeText={text => this.validateLandMark(text, "landMark")}
          placeholderTextColor="#9A99A2"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Town/city"
          onChangeText={text => this.validateCity(text, "city")}
          placeholderTextColor="#9A99A2"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Select State"
          onChangeText={text => this.validateState(text, "state")}
          placeholderTextColor="#9A99A2"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Pincode"
          // keyboardType="numeric"
          onChangeText={text => this.validatePinCode(text, "pincode")}
          placeholderTextColor="#9A99A2"
          underlineColorAndroid={"transparent"}
          maxLength={6}
        />
        {/* <MultiSelect
          style={styles.textInputM}
          items={this.items}
          uniqueKey="id"
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          selectText="Select State"
          searchInputPlaceholderText="Search Items..."
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          searchInputStyle={{ color: "#CCC" }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        /> */}
        <Text
          style={{
            fontSize: 15,
            color: "#39383C",
            paddingLeft: 90,
            height: 30,
            fontWeight: "bold"
          }}
        >
          Delivery Address
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Door/flat/bdg/company name & No."
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
          placeholder="State / pincode"
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
    fontSize: 15,
    color: "#39383C",
    paddingLeft: 100,
    height: 25,
    fontWeight: "bold"
  },
  textInput: {
    alignSelf: "stretch",
    height: 30,

    marginBottom: 4,
    color: "#39383C",
    borderBottomColor: "#2A2A2F",
    borderBottomWidth: 0.5
  },
  textInputM: {
    paddingTop: 30,
    alignSelf: "stretch",
    height: 30,
    marginBottom: 4,
    color: "#39383C",
    borderBottomColor: "#2A2A2F",
    borderBottomWidth: 0.5
  },
  headerText: {
    fontSize: 12,
    margin: 0,
    fontWeight: "normal",
    alignSelf: "stretch",
    height: 25,
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
