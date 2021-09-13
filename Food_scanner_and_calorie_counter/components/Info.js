import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Button, TextInput } from 'react-native';
import * as firebase from "firebase";

import Constants from 'expo-constants';

let FoodItem = {
  Title: "",
  Calories: 1,
  Fats: 1,
  Sugar: 1,
  Servings: 0
};

function storeFoodItem(CurrentUser, FoodItem) {

  if (CurrentUser != null) {
    console.log("My uid is ", CurrentUser.uid)

    firebase
        .database()
        .ref('users/' + CurrentUser.uid)
        .push({
          Title: FoodItem.Title,
          Calories: FoodItem.Calories * FoodItem.Servings,
          Fats: FoodItem.Fats * FoodItem.Servings,
          Sugar: FoodItem.Sugar * FoodItem.Servings,
          Servings: FoodItem.Servings
        });

      console.log("finished storing");
  }
}

function readFoodItem(CurrentUser, FoodItem) {

    if (CurrentUser != null) {
        console.log("My uid is ", CurrentUser.uid)

        firebase
            .database()
            .ref('users/' + CurrentUser.uid)
            .once('value', snapshot => {
                const tastyFood = snapshot.val();
                console.log(tastyFood);
             });

        console.log("finished writing");
    }
}

// function setServingsValue(num, FoodItem) {
//   FoodItem.Servings = FoodItem.Servings * num;
// }

export default class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentUser: null, userInput: 1 };

    FoodItem.Title = props.navigation.state.params.Title;
    FoodItem.Calories = props.navigation.state.params.Calories;
    FoodItem.Fats = props.navigation.state.params.Fats;
    FoodItem.Sugar = props.navigation.state.params.Sugar;
    FoodItem.Servings = this.state.userInput;
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({
      currentUser,
      userInput: 1});
  }
  render() {
    const { currentUser } = this.state;
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            {FoodItem.Title} {'\n\n'}
          </Text>
          <Text style={styles.instructions}>
            Calories per serving: {FoodItem.Calories * FoodItem.Servings} {'\n\n'}
            Fat per serving: {FoodItem.Fats * FoodItem.Servings} {'\n\n'}
            Sugar per serving: {FoodItem.Sugar * FoodItem.Servings} {'\n\n'}
          </Text>
          <Text style={styles.instructions}>
            {'\n'}
          </Text>
          <Text style={styles.instructions}>
            How many portions?:
          </Text>
          <TextInput
              style={styles.input}
              keyboardType='numeric'
              value={this.state.userInput.toString()}
              maxLength={10}
              placeholder="1"
              onChangeText={userInput => this.setState( { userInput } )}
          />
          <Text style={styles.instructions}>
            {'\n'}
          </Text>
          {/*<Button title="Hello World" onPress={() => alert('Hello, world!')} />*/}

          <View style={{ flexDirection: "row" }}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate("BarcodeScanner")} style={styles.leftbutton}>
              <Text style={styles.buttonText}>Rescan</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => storeFoodItem(currentUser, FoodItem)} style={styles.rightbutton}>
              <Text style={styles.buttonText}>Add to Daily Intake</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => readFoodItem(currentUser, FoodItem)} style={styles.rightbutton}>
                <Text style={styles.buttonText}>Read History</Text>
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
  title: {
    color: '#888',
    fontSize: 36,
    marginHorizontal: 15,
    marginBottom: 10,
    justifyContent: 'space-evenly',
    textAlign: 'center'
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});