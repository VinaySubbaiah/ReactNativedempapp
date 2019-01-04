import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import Scan from "./components/Scan";
import CustomerAddress from "./components/customerAddress";
import DeliveryAddress from "./components/deliveryAddress";
import DropDown from "./components/listView";
import Card from './components/card';
import Container from './components/container'
export default class App extends Component {
  

 
  render() {
    return (
          <Container>
            <Card>
            
           
            </Card>
          </Container>
           
       
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    backgroundColor: "#ffffff"
  }
});


{/* <View
              style={{
                height: 40,
                backgroundColor: "#fffff",
                justifyContent: "center",
                paddingLeft: 120,
                fontSize: 30
              }}
            >
              <Text style={{ fontSize: 20 }}>1MONEY</Text>
            </View>
            <View
              style={{
                height: 30,
                backgroundColor: "#3C30DE",
                paddingLeft: 130,
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 15 }}>KYC</Text>
            </View>
            <Scan />

            <CustomerAddress />
            <DeliveryAddress />
            <DropDown /> */}