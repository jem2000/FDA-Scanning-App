import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Button } from 'react-native';
import * as firebase from "firebase";

import Constants from 'expo-constants';

const { Apple } = require('./TestingVar.js');

export default class Loading extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.instructions}>
            Calories: {Apple.Calories} {'\n\n'}
            Fats: {Apple.Fats} {'\n\n'}
            Sugar: {Apple.Sugar} {'\n\n'}
            Score: {Apple.Score} {'\n\n'}
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