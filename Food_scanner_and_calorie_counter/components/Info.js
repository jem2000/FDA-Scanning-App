import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Button } from 'react-native';
import * as firebase from "firebase";

import Constants from 'expo-constants';

let FoodItem = {
  Calories: 1,
  Fats: 1,
  Sugar: 1,
  Score: 0,
  basedd: 0
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    console.log("b");
    FoodItem.Calories = props.navigation.state.params.Calories;
    FoodItem.Fats = props.navigation.state.params.Fats;
    FoodItem.Sugar = props.navigation.state.params.Sugar;
    FoodItem.Score = props.navigation.state.params.Score;
    FoodItem.basedd = props.navigation.state.params.basedd;
    console.log(FoodItem);
  }
  componentDidMount() {
  }
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.instructions}>
            Calories: {FoodItem.Calories} {'\n\n'}
            Fats: {FoodItem.Fats} {'\n\n'}
            Sugar: {FoodItem.Sugar} {'\n\n'}
            Score: {FoodItem.Score} {'\n\n'}
          </Text>
          <Text style={styles.instructions}>
            {'\n'}
          </Text>
          <Text style={styles.instructions}>
            How many portions?:
          </Text>
          <Text style={styles.instructions}>
            {'\n'}
          </Text>
          {/*<Button title="Hello World" onPress={() => alert('Hello, world!')} />*/}

          <View style={{ flexDirection: "row" }}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate("BarcodeScanner")} style={styles.leftbutton}>
              <Text style={styles.buttonText}>Rescan</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('Goodbye, world!')} style={styles.rightbutton}>
              <Text style={styles.buttonText}>Add to Daily Intake</Text>
            </TouchableOpacity>

          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
    justifyContent: 'space-evenly',
  },
  leftbutton: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    width: 150,
    height: 65,

  },
  rightbutton: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    width: 150,
    height: 65,

  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});