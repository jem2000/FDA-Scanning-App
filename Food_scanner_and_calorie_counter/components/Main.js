import React from "react";
import {
  StyleSheet,
  Iconoi,
  Button,
  TextInput,
  Text,
  View
} from "react-native";
import * as firebase from "firebase";
import { AsyncStorage } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default class Main extends React.Component {
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
  logoutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // AsyncStorage.removeItem("key");
        this.props.navigation.navigate("Login");
      });
  };
  render() {
    const { currentUser } = this.state;
    return (
        <View  style={styles.container}>
           <Text>Hi {currentUser && currentUser.email}!</Text>
           <Button title="Logout" onPress={this.logoutUser} />
           <Button title = "Scan Barcode" onPress={() => this.props.navigation.navigate("BarcodeScanner")} />
           <Button title = "Info" onPress={() => this.props.navigation.navigate("Info")} />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
